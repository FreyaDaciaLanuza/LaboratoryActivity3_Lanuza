// LANUZA, FREYA DACIA N. 
// BSCS 2B

let baseNumber = 3; // from 2023-7298-19003

console.log("");
console.log("-------------------------------------");
console.log("");

// -------------------------------------------
// Problem 1: Grade Calculator
// -------------------------------------------

function calculateGrade(grade) 
{
    if (grade < 60) return 'F';     
    if (grade < 70) return 'D';     
    if (grade < 80) return 'C';     
    if (grade < 90) return 'B';     
    return 'A';                     
}

// compute score
let grade = baseNumber * 10 + 5;

console.log("Problem 1: Grade Calculator");
console.log("");
console.log("Score:", grade, "--> Grade:", calculateGrade(grade));

// interval
console.log("");
console.log("-------------------------------------");
console.log("");

// -------------------------------------------
// Problem 2: Star Pattern
// -------------------------------------------

let rows = baseNumber + 2;

console.log("Problem 2: Star Pattern (Rows =", rows, ")");
console.log("");

function showStars(rows) 
{
    // Outer loop = number of rows
    for (let i = 1; i <= rows; i++) 
    {
        let stars = "";
        // Inner loop = number of stars per row
        for (let j = 1; j <= i; j++) 
        {
            stars += "*";
        }
        console.log(stars); // print row of stars
    }
}

showStars(rows);

// interval
console.log("");
console.log("-------------------------------------");
console.log("");

// -------------------------------------------
// Problem 3: Prime Number Checker
// -------------------------------------------

function isPrime(checkNum) {
    if (checkNum <= 1) return false; // 0 and 1 are not prime
    // test divisibility up to square root of number
    for (let i = 2; i <= Math.sqrt(checkNum); i++) 
    {
        if (checkNum % i === 0) 
        { 
            // divisible by another number
            return "not prime";
        }
    }
    return "prime";
}

// number to check
let checkNum = baseNumber + 10;

console.log("Problem 3: Prime Number Checker");
console.log("");
console.log("check", checkNum, "-->", isPrime(checkNum));

// interval
console.log("");
console.log("-------------------------------------");
console.log("");
