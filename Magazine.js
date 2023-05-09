export class Magazine {
    constructor(title, edit) {
        this.title = title;
        this.edit = edit;
        this.serialNo = null;
    }

    accept(visitor) {
        visitor.visit(this);
    }
}