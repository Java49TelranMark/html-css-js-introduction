let possibleNames = ["Mark", "Tony", "Billy", "John", "Michael", "Jack", "Ron", "Frank", "Tommy", "Sal", "Jimmy", "Richie", ];

let employees = createEmployeeArray(6, 4, 10000, 20000, 1950, 2002);

console.log(employees);

console.log("average age is " + getAverageAge(employees)+ " years old");

console.log(getEmployeesBySalary(employees, 12000, 19000));

console.log(increaseSalary(employees, 15000, 15));

function createEmployeeArray(nEmployees, idDigits, minSalary, maxSalary, minBirthYear, maxBirthYear){
    let employeeArray = [];
    for (i = 0; nEmployees > 0; i++){
        employeeArray[i] = getRandomEmployee(idDigits, minSalary, maxSalary, minBirthYear, maxBirthYear);
        console.log(employeeArray[i]);
        nEmployees--;
    }
    return employeeArray;
}
function getRandomEmployee(idDigits, minSalary, maxSalary, minBirthYear, maxBirthYear){
    let id = createRandomID(idDigits);
    let name = getRandomName(possibleNames);
    let salary = getRandomValue(minSalary, maxSalary);
    let year = getRandomValue(minBirthYear, maxBirthYear);
    let employee = createEmployee(id, name, year, salary);
    return employee;
}
function createRandomID(num){
    let multip = createMultip(num);
    let rnum= Math.trunc(Math.random()*multip);
    return rnum;
}
function createMultip(num){
    let multip = 1
    do{
        multip = multip*10;
        num = num - 1;
    } while (num > 0);
    return multip;
}
function getRandomValue(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }
function getRandomName(possibleNames){
    let index = getRandomValue(0, possibleNames.length);
    return possibleNames[index];
}

function createEmployee(id, name, birthYear, salary){
    return {id, name, birthYear, salary};
}
function getAverageAge(employees){
    let sumYears = 0;
    for (i = 0; i < employees.length; i++){
        let year = getYear(employees[i]);
        sumYears = sumYears + year;
    }
    let averageAge = 2022 - (sumYears / employees.length);
    return averageAge
}
function getYear(array){
    year = array.birthYear;
    return year;
}
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    let employeesFiltered = employees.filter(employee => employee.salary > salaryFrom && employee.salary < salaryTo);
    let employeesSorted = employeesFiltered.sort((a, b) => a.salary - b.salary);
    for (i = 0; i < employeesSorted.length; i++){
        console.log(employeesSorted[i]);
    }
    return employeesSorted;
}
function increaseSalary(employees, borderSalary, percent){
    let employeesFiltered = employees.filter(employee => employee.salary < borderSalary);
    let employeesHappy = employeesFiltered.map(employee => {
        let add = employee.salary * (percent/100);
        employee.salary += add; 
        return employee;
    });
    console.log(employeesHappy);
    for (i = 0; i < employeesHappy.length; i++){
        console.log(employeesHappy[i]);
    }
    return employeesHappy;
}