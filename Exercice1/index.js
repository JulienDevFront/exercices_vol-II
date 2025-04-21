/** - - -
 * 🕵️ The feature takes two arguments, the first for the minimum value, the second
 * 
 * is the maximum value and returns a string of the even numbers in the interval.
 * - - -
 * @param {number} min minimum value
 * @param {number} max maximum value
 * @return {string} the even numbers 
 */
const pairNumbers = (min, max) => {
    const evenNumbers = [];
    for(let i = Number(min) ; i <= Number(max) ; i++) if(i % 2 === 0) evenNumbers.push(i);
    return evenNumbers.toString();
};

export default pairNumbers;

