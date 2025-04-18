/** - - -
 * 🕵️ This feature targets two elements in the DOM: a button and a paragraph. 
 * 
 * It adds a click event to the button that displays the paragraph.
 * - - -
 * @param {HTMLButtonElement} button - The button element to attach the event to.
 * @param {HTMLElement} paragraph - The paragraph element to display.
 */
const displayMessage = (targetButton, targetMessage) => {
    const button = document.querySelector(targetButton);
    const paragraph = document.querySelector(targetMessage);
    
    button.addEventListener('click', () => {
        paragraph.dataset.active === 'false' ? paragraph.style.display = 'block' : paragraph.style.display = 'none';
        paragraph.dataset.active === 'false' ? paragraph.dataset.active = 'true' : paragraph.dataset.active = 'false';
    });
};

displayMessage('#myButton', '#message');
