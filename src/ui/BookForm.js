import { showErrorMessage } from "./errorMessage";

export class BookForm {
    #formElement;
    #inputElements;
    #yearInputElement;
    #pagesInputElement;
    #yearErrorElement;
    #pagesErrorElement;
    #minYear;
    #maxYear;
    #minPages;
    #maxPages;
    constructor(params){
        this.#formElement = document.getElementById(params.idForm);
        this.#inputElements = document.querySelectorAll(`#${params.idForm} [name]`);
        this.#yearInputElement = document.getElementById(params.idYearInput);
        this.#pagesInputElement = document.getElementById(params.idPagesInput);
        this.#yearErrorElement = document.getElementById(params.idYearError);
        this.#pagesErrorElement = document.getElementById(params.idPagesError);
        this.#minYear = params.minYear;
        this.#maxYear = params.maxYear;
        this.#minPages = params.minPages;
        this.#maxPages = params.maxPages;
        this.onChange();
    }
    addSubmitHandler(processBookFun){
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            console.log("submitted");
            const book = Array.from(inputElements).reduce(
                (res, cur) => {
                    res[cur.name] = cur.value;
                    return res;
                }, {}
            )
            console.log(book);
            processBookFun(book);
        })
    }
    onChange(){
        this.#yearInputElement("change", (event) =>{
            this.validateYear(event.target);
        })
        this.#pagesInputElement("change", (event) =>{
            this.validateBookPages(event.target);
        })
    }
    validateBookPages(element) {
        const value = +element.value;
        if (value < this.#minPages || value > this.#maxPages) {
            const message = `Amount of pages must be between ${this.#minPages}  and ${this.#maxPages}`;
            showErrorMessage(element, message, pagesErrorElement);
        }
    }
    validateYear(element) {
        const value = +element.value;
        if (value < this.#minYear || value > this.#maxYear) {
            const message = `Year must be between ${this.#minYear}  and ${this.#maxYear}`;
            showErrorMessage(element, message, yearErrorElement);
        }
    }
}

const inputElements = document.querySelectorAll(".book_class [name]");
const yearErrorElement = document.getElementById("year_error");
const pagesErrorElement = document.getElementById("pages_error");



