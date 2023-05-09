import { Magazine } from './Magazine.js';
import { Book } from './Book.js';
export class Visitor {
    visitBook(book) { }
    visitMagazine(magazine) { }
    visit(element) {
        if (element instanceof Book) {
            this.visitBook(element);
        } else if (element instanceof Magazine) {
            this.visitMagazine(element);
        }
    }
}

export class BookVisitor extends Visitor {
    visitBook(book) {
        console.log(`Book: ${book.title}, Author: ${book.author}, BookNo: ${book.bookNo}`);
    }
}

export class MagazineVisitor extends Visitor {

    visitMagazine(magazine) {
        console.log(`Magazine: ${magazine.title}, Publisher: ${magazine.author}, serialNo: ${magazine.serialNo}`);
    }
}