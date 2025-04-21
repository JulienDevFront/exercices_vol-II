/** - - -
 * 🕵️ This function takes two DOM elements as parameters and displays 
 * 
 * the value of the button on click in the text input.
 * - - -
 * @param {HTMLElement} targetParentElem - The parent element containing the buttons.
 * @param {HTMLInputElement} targetInputElem - The input element to display the value.
 */
const appendToDisplay = (targetParentElem, targetInputElem) => {
    const parentElem = document.querySelector(targetParentElem);
    const inputElem = document.querySelector(targetInputElem);
    
    const numbers = ['0','1','2','3','4','5','6','7','8','9'].map(i => parentElem.querySelector(`[data-number='${i}']`));
    const operators = ['+', '-', '*', '/'].map(i => parentElem.querySelector(`[data-operator='${i}']`));

    numbers.forEach(i => i.addEventListener('click', () => inputElem.value = inputElem.value + i.dataset.number));
    operators.forEach(i => i.addEventListener('click', () => {
        const lastChar = inputElem.value.slice(-1);
        if(['+', '-', '*', '/'].includes(lastChar)) return
        inputElem.value = inputElem.value + i.dataset.operator;
    }));
};
appendToDisplay('#calculator', '#display');

/** - - -
 * 🕵️ This function takes two DOM elements as parameters and 
 * 
 * removes the value of the text input on a click event.
 * - - -
 * @param {HTMLElement} targetOptionElem - The option element to clear the input.
 * @param {HTMLInputElement} targetInputElem - The input element to clear.
 */
const clearDisplay = (targetOptionElem, targetInputElem) => {
    const optionElem = document.querySelector(`[data-option='${targetOptionElem}']`);
    const inputElem = document.querySelector(targetInputElem);

    optionElem.addEventListener('click', () => inputElem.value = '');
};
clearDisplay('clear', '#display');

/** - - -
 * 🕵️ This function manages the logic of a calculator.
 * - - -
 * @param {HTMLElement} targetOptionElem - The option element to calculate the result.
 * @param {HTMLInputElement} targetInputElem - The input element to display the result.
 */
const calculateResult = (targetOptionElem, targetInputElem) => {
    const optionElem = document.querySelector(`[data-option='${targetOptionElem}']`);
    const inputElem = document.querySelector(targetInputElem);

    optionElem.addEventListener('click', () => {
        const expression = inputElem.value;

        if (/\/0(?!\d)/.test(expression)) {
            inputElem.value = 'Division by zero is not allowed';
            return
        };

        try {
            const result = eval(expression);
            inputElem.value = result;
        } catch (error) {inputElem.value = 'Error';};
    });
};
calculateResult('calculate', '#display');