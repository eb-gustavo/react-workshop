const fs = require('fs');
const path = require('path');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

// Using a JSON file as our 'database'
const _ORIGINAL_EMAILS_FILE = path.join(__dirname, '../data/emails.json');
const EMAILS_FILE = path.join(__dirname, '../data/_emails.json');
fs.createReadStream(_ORIGINAL_EMAILS_FILE).pipe(fs.createWriteStream(EMAILS_FILE));

const getEmails = (callback) => {
    fs.readFile(EMAILS_FILE, (err, fileContents) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        callback(JSON.parse(fileContents));
    });
}

const saveEmails = (emails, callback) => {
    fs.writeFile(EMAILS_FILE, JSON.stringify(emails, null, 4), (err) => {
        if (err) {
            console.log(err);
            process.exit(1);
        }

        callback();
    });
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// allow for cross-origin API requests
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    next();
});

// routes that end in /emails
router.route('/emails')

    // create an email (accessed via POST to http://localhost:8080/emails)
    .post((req, res) => {
        getEmails((emails) => {
            let email = {
                id: Date.now(),
                date: new Date() + '',
                read: false,
                ...req.body
            };

            emails = [...emails, email];
            // write out file back to disk
            saveEmails(emails, () => {
                res.json({success: true});
            });
        });
    })

    // get all the emails (access via GET from http://localhost:8080/emails)
    .get((req, res) => {
        getEmails((emails) => {
            let {deleted, q, unread} = req.query;
            let processedEmails = _.chain(emails)
                .filter((email) => {
                    if (unread === 'true') {
                        return !email.read;
                    }
                    return true;
                })
                .filter((email) => {
                    if (deleted === 'true') {
                        return email.deleted;
                    }
                    return !email.deleted;
                })
                .filter((email) => {
                    if (q) {
                        return email.subject.toLowerCase().indexOf(q.toLowerCase()) > -1;
                    }
                    return true;
                })
                .map(({message, ...email}) => email)
                .sortBy([({date}) => (new Date(date)).getTime()])
                .reverse()
                .value();

            // Return back the full list of emails
            res.setHeader('Cache-Control', 'no-cache');
            res.json(processedEmails);
        });
    });

// routes that end in emails/:emailId
router.route('/emails/:emailId')

    // get the email with this id (accessed via GET from http://localhost:8080/emails/:emailId)
    .get((req, res) => {
        getEmails((emails) => {
            let emailId = +req.params.emailId;
            let email = _.find(emails, (email) => email.id === emailId);

            res.json(email);
        });
    })

    // update the email this id (accessed via PUT on http://localhost:8080/emails/:emailId)
    .put((req, res) => {
        getEmails((emails) => {
            let emailId = +req.params.emailId;
            // make a new copy of the emails list, updating the appropriate email
            let updatedEmails = emails.map((email) => {
                if (email.id === emailId) {
                    if (_.has(req.body, 'read')) {
                        email = {
                            ...email,
                            read: !!req.body.read
                        };
                    }
                }

                return email;
            });

            saveEmails(updatedEmails, () => {
                res.json({success: true});
            });
        });
    })

    // delete the email this id (accessed via PUT on http://localhost:8080/emails/:emailId)
    .delete((req, res) => {
        getEmails((emails) => {
            let emailId = +req.params.emailId;
            // make a new copy of the emails list, marking the appropriate email as deleted
            let updatedEmails = emails.map((email) => {
                if (email.id === emailId) {
                    // make a copy of the email to update before updating
                    return {
                        ...email,
                        deleted: true
                    }
                }

                return email;
            });

            saveEmails(updatedEmails, () => {
                res.json({success: true});
            });
        });
    });

// Register the routes
app.use('/', router);

app.get('/ping', (req, res) => {
    res.json({success: true});
});

app.listen(port, () => {
    console.log('Server started: http://localhost:' + port + '/');
});
