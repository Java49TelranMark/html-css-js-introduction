import { Library } from "./data/library.js";

const inputElements = document.querySelectorAll(".book_class [name]");
const MIN_YEAR = 0;
const MAX_YEAR = 2022;
const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const ERROR_CLASS = "error";
const TIME_OUT_ERROR_MESSAGE = 5000;
const ACTIVE = "active"
const library = new Library();

const yearErrorElement = document.getElementById("year_error");
const pagesErrorElement = document.getElementById("pages_error");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
const sectionsElement = document.querySelectorAll("section");
const booksListElement = document.getElementById("books-all");
const yearFormErrorElement = document.getElementById("year_form_error");
const booksYearListElement = document.getElementById("books-year");
const booksAuthorListElement = document.getElementById("books-author")

function onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    const book = Array.from(inputElements).reduce(
        (res, cur) => {
            res[cur.name] = cur.value;
            return res;
        }, {}
    )
    console.log(book);
    library.addBook(book);
}

function onChange(event) {
    if (event.target.name == "book_publish_year") {
        validateYear(event.target)
    } else if (event.target.name == "book_pages") {
        validateBookPages(event.target);
    }
}

function validateBookPages(element) {
    const value = +element.value;
    if (value < MIN_PAGES || value > MAX_PAGES) {
        const message = `Amount of pages must be between ${MIN_PAGES}  and ${MAX_PAGES}`;
        showErrorMessage(element, message, pagesErrorElement);
    }
}

function validateYear(element) {
    const value = +element.value;
    if (value < MIN_YEAR || value > MAX_YEAR) {
        const message = `Year must be between ${MIN_YEAR}  and ${MAX_YEAR}`;
        showErrorMessage(element, message, yearErrorElement);
    }
}
function showErrorMessage(element, message, errorElement) {
    element.classList.add(ERROR_CLASS);
    errorElement.innerHTML = message;
    setTimeout(() => {
        element.classList.remove(ERROR_CLASS);
        element.value = ''; 
        errorElement.innerHTML = '';
    }, TIME_OUT_ERROR_MESSAGE);
}

function showSection(index) {
    buttonsMenuElement.forEach(e => e.classList.remove(ACTIVE));
    sectionsElement.forEach(e => e.hidden = true)
    buttonsMenuElement[index].classList.add(ACTIVE);
    sectionsElement[index].hidden = false;
    if (index == 1) {
        const books = library.getAllBooks();
        booksListElement.innerHTML = getBooksItems(books);
    }
}
function getBooksItems(books) {
    return books.map (e => 
        `<li class="books-item">
              <div class="books-item-container">
                 <p class="books-item-paragraph">Title: ${e.book_title} </p>
                 <p class="books-item-paragraph">Author: ${e.book_author} </p>
                 <p class="books-item-paragraph">Genre: ${e.book_genre}</p>
                 <p class="books-item-paragraph">Year: ${e.book_publish_year}</p>
                 <p class="books-item-paragraph">Pages: ${e.book_pages}</p>
              </div>
          </li>`).join('');
}
// function Library() {
//     this.books = [];
// }
// Library.prototype.addBook = function(book) {
//     this.books.push(book);
// }
// Library.prototype.getAllBooks = function(){
//     return this.books;
// }
// Library.prototype.getBooksByYear = function(yearFrom, yearTo) {
//     return this.books.filter(e => e.book_publish_year >= yearFrom && e.book_publish_year < yearTo);
// }
// Library.prototype.getBooksByAuthor = function(author) {
//     return this.books.filter(e => e.book_author === author);
// }

let yearFrom = 0;
let yearTo = 0;
function onSubmitYear(event) {
    event.preventDefault();
    const books = library.getBooksByYear(yearFrom, yearTo);
    booksYearListElement.innerHTML = getBooksItems(books);
}

function onChangeYearFrom(event) {
    const value = +event.target.value;
    if (yearFrom && value >= yearTo) {
        showErrorMessage(event.target, "Year 'from' must be less than year 'to'",
        yearFormErrorElement);
    } else {
        yearFrom = value;
    }
}
function onChangeYearTo(event) {
    const value = +event.target.value;
    if (yearTo && value < yearFrom) {
        showErrorMessage(event.target, "Year 'To' must be greater than year 'From'",
        yearFormErrorElement);
    } else {
        yearTo = value;
    }
}

let author = 0;
function onChangeAuthor(event){
    const value = event.target.value;
    author = value;
}

function onSubmitAuthor(event) {
    console.log(author);
    event.preventDefault();
    const books = library.getBooksByAuthor(author);
    console.log(books);
    booksAuthorListElement.innerHTML = getBooksItems(books);
}

window.onSubmit = onSubmit;
window.onChange = onChange;
window.showSection = showSection;
window.onChangeYearTo = onChangeYearTo;
window.onChangeYearFrom = onChangeYearFrom
window.onSubmitAuthor = onSubmitAuthor
window.onChangeAuthor = onChangeAuthor
