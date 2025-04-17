/** 🕵️
 * 
 * Performs a basic arithmetic operation on two numbers. Takes two numeric values and an operator, 
 * 
 * then returns the result of the  operation according  to the given operator.
 * 
 * @param {number} firstTerm first value for operation
 * @param {number} secondTerm second value for operation
 * @param {string} operator string for operators '+', '-', '*', '/' or '%'
 * @return {number} value of the operation
 */
export const calculate = (firstTerm, secondTerm, operator) => {
    if(typeof firstTerm !== 'number' || typeof secondTerm !== 'number') return console.error(`@calculate\n The first term '${firstTerm}' or second term '${secondTerm}' is not a number.`);
    if(!['+', '-', '*', '/', '%'].includes(operator)) return console.error(`@calculate\n The operator '${operator}' is not valid.`);

    switch(operator){
        case '+': return firstTerm + secondTerm;
        case '-': return firstTerm - secondTerm;
        case '*': return firstTerm * secondTerm;
        case '/': return secondTerm === 0 ? console.error("Division by zero is not allowed") : firstTerm / secondTerm;
        case '%': return firstTerm < secondTerm ? console.error("Invalid operator") : firstTerm % secondTerm;
    };
};