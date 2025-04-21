/** - - -
 * 🕵️ This function converts the number contained in the 
 * 
 * text input into its binary representation.
 */
function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryResult = document.getElementById('binaryResult');

    const decimalNumber = Number(decimalInput);

    if (isNaN(decimalNumber)) {
        binaryResult.textContent = '';
        return;
    };

    const binary = decimalNumber.toString(2);
    binaryResult.textContent = binary;
};
