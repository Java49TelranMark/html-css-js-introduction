const inputElements = document.querySelectorAll(".book_class [name]");
const MIN_YEAR = 0;
const MAX_YEAR = 2022;
const MIN_PAGES = 50;
const MAX_PAGES = 2000;
const ERROR_CLASS = "error";
const TIME_OUT_ERROR_MESSAGE = 5000;
const ACTIVE = "active"

const yearErrorElement = document.getElementById("year_error");
const pagesErrorElement = document.getElementById("pages_error");
const buttonsMenuElement = document.querySelectorAll(".buttons-menu *");
const sectionsElement = document.querySelectorAll("section");

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
    company.hireEmployee(book);
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
        const employees = company.getAllEmployees();
        employeesListElement.innerHTML = getEmployeeItems(employees);
    }
}
function getBooksItems(books) {
    return books.map (e => 
        `<li class="books-item">
              <div class="books-item-container">
                 <p class="books-item-paragraph">Name: ${e.employee_name} </p>
                 <p class="books-item-paragraph">Email: ${e.email} </p>
                 <p class="books-item-paragraph">Department: ${e.department}</p>
                 <p class="books-item-paragraph">Bithdate: ${e.birthDate}</p>
                 <p class="books-item-paragraph">Salary: ${e.salary}</p>
              </div>
          </li>`).join('');
}
function Company() {
    this.employees = [];
}
Company.prototype.hireEmployee = function(employee) {
    employee.salary = +employee.salary;
    this.employees.push(employee);
}
Company.prototype.getAllEmployees = function(){
    return this.employees;
}
Company.prototype.getEmployeesBySalary = function(salaryFrom, salaryTo) {
    //TODO
    return this.employees.filter(e => e.salary >= salaryFrom && e.salary < salaryTo )
}
