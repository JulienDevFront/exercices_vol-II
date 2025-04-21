/** - - -
 * 🕵️ Performs a basic arithmetic operation on two numbers. Takes two numeric values and an operator, 
 * 
 * then returns the result of the  operation according  to the given operator.
 * - - -
 * @param {number} firstTerm first value for operation
 * @param {number} secondTerm second value for operation
 * @param {string} operator string for operators '+', '-', '*', '/' or '%'
 * @return {number} value of the operation
 */
const calculate = (firstTerm, secondTerm, operator) => {
    if(!['+', '-', '*', '/', '%'].includes(operator)) return 'Invalid operator';

    switch(operator){
        case '+': return Number(firstTerm) + Number(secondTerm);
        case '-': return Number(firstTerm) - Number(secondTerm);
        case '*': return Number(firstTerm) * Number(secondTerm);
        case '/': return Number(secondTerm) === 0 ? 'Division by zero is not allowed' : Number(firstTerm) / Number(secondTerm);
        case '%': return Number(firstTerm) < Number(secondTerm) || operator !== '%' ? 'Invalid operator' : Number(firstTerm) % Number(secondTerm);
    };
};

export default calculate;