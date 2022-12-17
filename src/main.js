import { Library } from "./data/library.js";
import { BookForm } from "./ui/bookform.js";
import { showErrorMessage } from "./ui/errorMessage.js";


const MIN_YEAR = 0;
const MAX_YEAR = 2022;
const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const ACTIVE = "active"

const library = new Library();
const bookForm = new BookForm ({idForm: "book_form", idYearInput: "year_input", 
idPagesInput: "pages_input", idYearError: "year_error", idPagesError: "pages_error", 
minYear: MIN_YEAR, maxYear: MAX_YEAR, minPages: MIN_PAGES, maxPages: MAX_PAGES})

bookForm.addSubmitHandler((book) => library.addBook(book));

const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
const sectionsElement = document.querySelectorAll("section");
const booksListElement = document.getElementById("books-all");
const yearFormErrorElement = document.getElementById("year_form_error");
const booksYearListElement = document.getElementById("books-year");
const booksAuthorListElement = document.getElementById("books-author")

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

//window.onSubmit = onSubmit;
//window.onChange = onChange;
window.showSection = showSection;
window.onChangeYearTo = onChangeYearTo;
window.onChangeYearFrom = onChangeYearFrom
window.onSubmitAuthor = onSubmitAuthor
window.onChangeAuthor = onChangeAuthor
window.onSubmitYear=onSubmitYear;
