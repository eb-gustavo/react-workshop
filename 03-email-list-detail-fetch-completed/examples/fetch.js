const checkStatus = (response = {}) => {
    if (response.status >= 300) {
        return Promise.reject(response);
    }
    return Promise.resolve(response);
};

const fetchJSON = (url, options = {}) => (
    fetch(url, options)
        .then(checkStatus)
        .then((response) => response.json())
)

const getEmails = () => (
    fetchJSON('http://localhost:8080/emails')
)

getEmails()
    .then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    });
