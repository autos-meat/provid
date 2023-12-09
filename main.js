// main.js
import { calculateRectangleArea } from './rectangle.js';

function calculateArea() {
    const length = parseFloat(document.getElementById('lengthInput').value);
    const width = parseFloat(document.getElementById('widthInput').value);

    if (!isNaN(length) && !isNaN(width)) {
        const area = calculateRectangleArea(length, width);
        document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers for length and width.';
    }
}
