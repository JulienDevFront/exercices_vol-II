/** - - -
 * 🕵️ Takes an array of numbers as argument, calculates the sum of the values, 
 * 
 * then returns the average.
 * - - -
 * @param {number[]} numberArray - Array of numbers
 * @return {number|undefined} The average of the values, or undefined if invalid input
 */
const calculateAverage = (numberArray) => {
    if(!Array.isArray(numberArray)) return 'No numbers to calculate average';

    return numberArray.reduce((sum, value, index) => {
        const total = sum + value

        return index === numberArray.length - 1 ? total / numberArray.length : total
    }, 0)
};

export default calculateAverage;