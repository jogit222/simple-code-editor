const input = document.getElementById('input-area');
const visual = document.getElementById('visual-layer');     
console.log(synthaxDB);
const eventColor = '#f58105';
const expressionColor = '#22c93b';
const effectColor = '#102eb5';
const conditionColor = '#e3b922';
const structureColor = '#147d78';
const sectionColor = '#12b39a';
const functionColor = '#a8a8a8';
const itemColor = '#8f10b5';
const miscColor = '#606361';

/*const delay = (delayInms) => {
  return new Promise(resolve => setTimeout(resolve, delayInms));
};
*/

/*function updateEditor()    {
    visual.innerHTML = ''
    const words = input.value;
    for (const item in words.split(' ')   {
        if (synthaxDB.events.includes(item))  {
            console.log('x')
            visual.innerHTML += `<span style="color: ${eventColor}">${item}</span>`;
        }
    }
}

*/
function updateEditor() {
    // 1. Flatten the types object into a single array of strings
    const typeKeywords = Object.values(synthaxDB.types).flat();

    const allKeywords = [
        ...synthaxDB.events, 
        ...synthaxDB.structures, 
        ...synthaxDB.sections, 
        ...synthaxDB.conditions, 
        ...synthaxDB.functions, 
        ...synthaxDB.expressions,
        ...synthaxDB.effects,
        ...typeKeywords, // Use the flattened list here
        ...synthaxDB.misc
    ].filter(e => typeof e === 'string'); // Safety check

    // 2. Sort by length (longest first)
    const sortedKeywords = allKeywords.sort((a, b) => b.length - a.length);

    // 3. Create pattern
    const patternString = sortedKeywords
        .map(e => e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
        .join('|');

    const pattern = new RegExp(`(${patternString})`, 'g');
    const parts = input.value.split(pattern);

    let finalHTML = '';
    for (const chunk of parts) {
        if (!chunk) continue;

        // Check categories (Note: use typeKeywords for the check)
        if (synthaxDB.events.includes(chunk)) {
            finalHTML += `<span style="color: ${eventColor}">${chunk}</span>`;
        } else if (synthaxDB.structures.includes(chunk)) {
            finalHTML += `<span style="color: ${structureColor}">${chunk}</span>`;
        } else if (synthaxDB.sections.includes(chunk)) {
            finalHTML += `<span style="color: ${sectionColor}">${chunk}</span>`;
        } else if (synthaxDB.conditions.includes(chunk)) {
            finalHTML += `<span style="color: ${conditionColor}">${chunk}</span>`;
        } else if (synthaxDB.functions.includes(chunk)) {
            finalHTML += `<span style="color: ${functionColor}">${chunk}</span>`;
        } else if (synthaxDB.expressions.includes(chunk)) {
            finalHTML += `<span style="color: ${expressionColor}">${chunk}</span>`;
        } else if (synthaxDB.effects.includes(chunk)) {
            finalHTML += `<span style="color: ${effectColor}">${chunk}</span>`;
        } else if (typeKeywords.includes(chunk)) { // Corrected check
            finalHTML += `<span style="color: ${itemColor}">${chunk}</span>`;
        } else if (synthaxDB.misc.includes(chunk)) {
            finalHTML += `<span style="color: ${miscColor}">${chunk}</span>`;
        } else {
            // Escape special HTML characters and handle newlines
            finalHTML += chunk
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/\n/g, '<br>');
        }
    }

    visual.innerHTML = finalHTML;
}



input.addEventListener('input', updateEditor);
