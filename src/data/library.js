export class Library {
    constructor(){
        this.books = [];
    }
addBook(book) {
    this.books.push(book);
}
getAllBooks() {
    return this.books;
}
getBooksByYear(yearFrom, yearTo) {
    return this.books.filter(e => e.book_publish_year >= yearFrom && e.book_publish_year < yearTo);
}
getBooksByAuthor(author) {
    return this.books.filter(e => e.book_author === author);
}
}