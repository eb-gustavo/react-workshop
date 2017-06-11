import {formatUrl} from 'url-lib';

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

export const getEmails = (queryParams) => (
    fetchJSON(formatUrl('http://localhost:8080/emails', queryParams))
)

export const getEmail = (id) => (
    fetchJSON(`http://localhost:8080/emails/${id}`)
)

export const updateEmail = (id, data = {}) => (
    fetchJSON(`http://localhost:8080/emails/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
)

export const deleteEmail = (id) => (
    fetchJSON(`http://localhost:8080/emails/${id}`, {
        method: 'DELETE'
    })
)
