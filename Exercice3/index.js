/** 🕵️
 * 
 * Takes an array of numbers as argument, calculates the sum of the values, 
 * 
 * then returns the average.
 *
 * @param {number[]} numberArray - Array of numbers
 * @return {number|undefined} The average of the values, or undefined if invalid input
 */
const calculateAverage = (numberArray) => {
    if(!Array.isArray(numberArray)) return 'No numbers to calculate average';

    let sum = 0;
    numberArray.map(i => sum = sum + i);
    return sum / numberArray.length;
};

export default calculateAverage;