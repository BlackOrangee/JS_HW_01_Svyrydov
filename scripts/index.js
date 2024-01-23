
function HelloUserName(){
    let userName = prompt('Name'); 

    alert('Hello ' + userName);
}

function AgeCalculator(){
    let currentYear = 2024;

    let birthYear = prompt('Enter your birth year');

    let age = currentYear - birthYear;

    alert('You are ' + age + ' years old');
}

function SquarePerimeter(){
    let squareSide = prompt('Enter the square side');

    let result = squareSide * 4;

    alert(squareSide + 
        ' + ' + squareSide + 
        ' + ' + squareSide + 
        ' + ' + squareSide + 
        ' = ' + result);
} 

function CircleArea(){
    const PI = 3.14;

    let radius = prompt('Enter the radius');

    let S = PI * (radius * radius);

    alert('Area is ' + S);
} 

document.addEventListener("DOMContentLoaded", ()=> {

    // 1 Hello username
    // HelloUserName();
    
    // 2 
    // AgeCalculator();

    // 3
    // SquarePerimeter();

    // 4
    // CircleArea();
})