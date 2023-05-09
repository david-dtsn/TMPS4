export class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    accept(visitor) {
        visitor.visit(this);
    }
}
