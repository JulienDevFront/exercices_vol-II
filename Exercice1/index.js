/** 🕵️
 * 
 * The feature takes two arguments, the first for the minimum value, 
 * 
 * the second is the maximum value and returns a string of the even 
 * 
 * numbers in the interval.
 * 
 * @param {number} min minimum value
 * @param {number} max maximum value
 * @return {string} the even numbers 
 *
 */
const pairNumbers = (min, max) => {
    if(typeof min !== 'number' || typeof max !== 'number') return console.error(`@pairNumbers\n the value '${min}' or '${max}' is not of type Number.`);
    const evenNumbers = [];
    for(let i = min ; i <= max ; i++) if(i % 2 === 0) evenNumbers.push(i);
    return evenNumbers.toString();
};