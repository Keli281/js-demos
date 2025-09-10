// Part 2: JavaScript Functions - Scope, Parameters & Return Values

// Global variables
const globalMessage = "This is a global variable";

// Function to calculate area (demonstrates parameters and return value)
function calculateArea() {
    // Local variables - scope is limited to this function
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    
    // Validate input
    if (isNaN(width) || isNaN(height)) {
        document.getElementById('area-result').textContent = "Please enter valid numbers";
        return; // Early return if input is invalid
    }
    
    // Call helper function and use its return value
    const area = calculateRectangleArea(width, height);
    
    // Display result
    document.getElementById('area-result').textContent = 
        `The area is: ${area}. ${globalMessage}`;
}

// Helper function with parameters and return value
function calculateRectangleArea(width, height) {
    // This function has its own scope for width and height parameters
    return width * height;
}

// Function to transform text (demonstrates parameter usage)
function transformText(transformType) {
    const inputText = document.getElementById('text-input').value;
    let result;
    
    // Using a switch statement to handle different transformation types
    switch(transformType) {
        case 'upper':
            result = convertToUpper(inputText);
            break;
        case 'lower':
            result = convertToLower(inputText);
            break;
        case 'reverse':
            result = reverseText(inputText);
            break;
        default:
            result = "Invalid transformation type";
    }
    
    document.getElementById('text-result').textContent = result;
}

// Function that takes a parameter and returns a value
function convertToUpper(text) {
    return text.toUpperCase();
}

// Another function with parameter and return value
function convertToLower(text) {
    return text.toLowerCase();
}

// Function demonstrating local variable and return value
function reverseText(text) {
    // Local variable with function scope
    const reversed = text.split('').reverse().join('');
    return reversed;
}

// Part 3: Combining CSS Animations with JavaScript

// Function to animate box (demonstrates class manipulation)
function animateBox() {
    const box = document.getElementById('animated-box');
    box.classList.add('animated');
}

// Function to reset box animation
function resetBox() {
    const box = document.getElementById('animated-box');
    box.classList.remove('animated');
}

// Function to flip card (demonstrates toggle)
function flipCard() {
    const cardContainer = document.querySelector('.card-container');
    cardContainer.classList.toggle('flipped');
}

// Function to open modal (demonstrates adding class)
function openModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');
}

// Function to close modal (demonstrates removing class)
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
}

// Additional function demonstrating closure
function createCounter() {
    // Private variable - only accessible through the returned function
    let count = 0;
    
    // Return a function that has access to the private variable
    return function() {
        count++;
        return count;
    };
}

// Create a counter instance
const counter = createCounter();

// This function would be called on another event to demonstrate closure
function updateCounter() {
    const count = counter();
    console.log(`Button has been clicked ${count} times`);
}

// Initialize page elements when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - page is ready');
    
    // Example of using the counter closure
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', updateCounter);
    });
});