/// <reference types= "cypress" />

const PayloadChangeBook = require('../payloads/change-book.json')

function ChangeBook(idBook) {
    return cy.request ({
        method: 'PUT',
        url: `Books/${idBook}`,
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: PayloadChangeBook
    })

}

export { ChangeBook };