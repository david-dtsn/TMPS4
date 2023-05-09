import { Magazine } from './Magazine.js';
import { Book } from './Book.js';
import { BookVisitor } from './Visitor.js';
import { MagazineVisitor } from './Visitor.js';
export class Library {
    constructor() {
        this.mediator = new Mediator();
        this.caretaker = new MementoCaretaker();
        this.commands = [];
        this.currentCommandIndex = -1;
    }
    addBook(title, author, bookNo) {
        const book = new Book(title, author);
        book.bookNo = bookNo;
        const command = new AddBookCommand(this.mediator, book);
        command.execute();
        this.commands.push(command);
        this.currentCommandIndex++;
    }

    addMagazine(title, author, serialNo) {
        const magazine = new Magazine(title, author);
        magazine.serialNo = serialNo;
        const command = new AddMagazineCommand(this.mediator, magazine);
        command.execute();
        this.commands.push(command);
        this.currentCommandIndex++;
    }

    removeBook(bookNo) {
        const book = this.mediator.findBook(bookNo);
        const command = new RemoveBookCommand(this.mediator, book);
        command.execute();
        this.commands.push(command);
        this.currentCommandIndex++;
    }

    save() {
        const memento = new LibraryMemento(this.mediator.books.slice(), this.mediator.magazines.slice());
        this.caretaker.addMemento(memento);
    }

    restore(index) {
        const memento = this.caretaker.getMemento(index);
        this.mediator.books = memento.getBooks();
        this.mediator.magazines = memento.getReviste();
    }

    printBooks() {
        const bookVisitor = new BookVisitor();
        this.mediator.books.forEach(book => book.accept(bookVisitor));
    }

    printMagazines() {
        const magazineVisitor = new MagazineVisitor();
        this.mediator.magazines.forEach(magazine => magazine.accept(magazineVisitor));
    }
}


class Mediator {
    constructor() {
        this.books = [];
        this.magazines = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    addMagazine(magazine) {
        this.magazines.push(magazine);
    }
}

class LibraryMemento {
    constructor(books, magazines) {
        this.books = books;
        this.magazines = magazines;
    }

    getBook() {
        return this.books;
    }

    getMagazine() {
        return this.magazines;
    }
}

class MementoCaretaker {
    constructor() {
        this.mementos = [];
    }

    addMemento(memento) {
        this.mementos.push(memento);
    }

    getMemento(index) {
        return this.mementos[index];
    }
}

class Command {
    constructor(receiver) {
        this.receiver = receiver;
    }

    execute() { }
}

class AddBookCommand extends Command {
    constructor(receiver, book) {
        super(receiver);
        this.book = book;
    }

    execute() {
        this.receiver.addBook(this.book);
    }
}

class AddMagazineCommand extends Command {
    constructor(receiver, magazine) {
        super(receiver);
        this.magazine = magazine;
    }

    execute() {
        this.receiver.addMagazine(this.revista);
    }
}

class RemoveBookCommand extends Command {
    //trebuie de implementat
}
