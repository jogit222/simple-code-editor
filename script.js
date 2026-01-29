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
    // 1. Combine all categories into one flat list for the Regex
    const allKeywords = [
        ...synthaxDB.events, 
        ...synthaxDB.structures, 
        ...synthaxDB.sections, 
        ...synthaxDB.conditions, 
        ...synthaxDB.functions, 
        ...synthaxDB.expressions,
        ...synthaxDB.effects,
        ...synthaxDB.types,
        ...synthaxDB.misc
    ];

    // 2. Sort by length (longest first) to prioritize "on join" over "on"
    const sortedKeywords = allKeywords.sort((a, b) => b.length - a.length);

    // 3. Create the pattern WITHOUT \b if you have special symbols.
    // We use a "Lookahead/Lookbehind" simulation or just plain matching.
    const patternString = sortedKeywords
        .map(e => e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
        .join('|');

    // If your keywords are strictly alphanumeric, use: `(\\b${e}\\b)`
    // If they have symbols, use the raw string as shown below:
    const pattern = new RegExp(`(${patternString})`, 'g');

    const parts = input.value.split(pattern);

    let finalHTML = '';
    for (const chunk of parts) {
        // Map the chunk to its color based on which category it lives in
        if (synthaxDB.events.includes(chunk)) {
            finalHTML += `<span style="color: ${eventColor}">${chunk}</span>`;
        } else if (synthaxDB.structures.includes(chunk)) {
            finalHTML += `<span style="color: ${strucureColor}">${chunk}</span>`;
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
        } else if (synthaxDB.item.includes(chunk)) {
            finalHTML += `<span style="color: ${itemColor}">${chunk}</span>`;
        } else if (synthaxDB.misc.includes(chunk)) {
            finalHTML += `<span style="color: ${miscColor}">${chunk}</span>`;


        } else {
            // Preserve newlines and spaces accurately
            finalHTML += chunk.replace(/\n/g, '<br>');
        }
    }

    visual.innerHTML = finalHTML;
}


input.addEventListener('input', updateEditor);
