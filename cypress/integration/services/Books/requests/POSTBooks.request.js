/// <reference types="cypress"/>

const payloadAddBook = require('../payloads/add-book.json')



function addBooks() {
    return cy.request({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: payloadAddBook
    })     
}

export { addBooks };