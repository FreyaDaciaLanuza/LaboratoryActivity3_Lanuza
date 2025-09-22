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
