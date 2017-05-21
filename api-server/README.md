## Installation
```
npm install
```

## Running
```
npm start
```

by default, application will run on port `8080` if you want to change it, you can run the app as `PORT=3000 npm start`

## Usage

* create an email (accessed via POST to http://localhost:8080/emails)
* get all the emails (accessed via GET from http://localhost:8080/emails)
* get the email with this id (accessed via GET from http://localhost:8080/emails/:emailId)
* update the email this id (accessed via PUT on http://localhost:8080/emails/:emailId)
* delete the email this id (accessed via PUT on http://localhost:8080/emails/:emailId)
