/** - - -
 * 🕵️ This function converts the number contained in the 
 * 
 * text input into its binary representation.
 */
function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;
    const binaryResult = document.getElementById('binaryResult');

    let number = Number(decimalInput);
    
    if (isNaN(number) || decimalInput.trim() === '') {
        binaryResult.textContent = '';
        return;
    };
    
    let binaries = [];

    while (number > 0) {
        const binary = number % 2;      
        binaries.push(binary);         
        number = Math.floor(number / 2);   
    }

    if (binaries.length === 0) binaryResult.textContent = '0';
    else binaryResult.textContent = binaries.reverse().join('');
};
