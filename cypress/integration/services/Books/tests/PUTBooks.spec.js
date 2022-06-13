import * as PUTBooks from  '../requests/PUTBooks.request';
import * as GETBooks from  '../requests/GETBooks.request';
import * as POSTBooks from  '../requests/POSTBooks.request';


/// TERMINAR !!!!!!
describe('PUT Books', () => { 
    it.only('Alterar um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => { 
            PUTBooks.ChangeBook(resAllBooks.body[0].id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.be.eq('Livro alterado')
            })
               
            
        })
    });
    it.only('Criar e alterar um livro', () => {
        POSTBooks.addBooks().then((resAddBooks) => { 
            PUTBooks.ChangeBook(resAddBooks.body.id).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.title).to.be.eq('Livro alterado')
            })
               
            
        })
    });
});