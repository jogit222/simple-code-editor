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
    // 1. Sort by length: "on join" (7 chars) comes before "on" (2 chars)
    const sortedEvents = [...synthaxDB.events].sort((a, b) => b.length - a.length);

    // 2. Escape special characters and add Word Boundaries (\b)
    // This turns "on join" into "\bon join\b"
    const patternString = sortedEvents
        .map(e => `\\b${e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`)
        .join('|');

    const pattern = new RegExp(`(${patternString})`, 'g');

    // 3. Split the input. The () in the Regex keeps the matches in the array.
    const parts = input.value.split(pattern);

    let finalHTML = '';
    for (const chunk of parts) {
        // We check if the chunk (trimmed) exists in our original DB
        if (synthaxDB.events.includes(chunk)) {
            finalHTML += `<span style="color: ${eventColor}">${chunk}</span>`;
        } else if (synthaxDB.structures.includes(chunk))   {
            finalHTML += `<span style="color: ${strucureColor}">${chunk}</span>`;
        } else if (synthaxDB.sections.includes(chunk))   {
            finalHTML += `<span style="color: ${sectionColor}">${chunk}</span>`;
        } else if (synthaxDB.conditions.includes(chunk))   {
            finalHTML += `<span style="color: ${conditionColor}">${chunk}</span>`;
        } else if (synthaxDB.functions.includes(chunk))   {
            finalHTML += `<span style="color: ${functionColor}">${chunk}</span>`;
        } else if (synthaxDB.expressions.includes(chunk))   {
            finalHTML += `<span style="color: ${expressionColor}">${chunk}</span>`;
        } else {
            // This handles normal text, spaces, and newlines
            finalHTML += chunk;
        }
    }

    visual.innerHTML = finalHTML;
}


input.addEventListener('keydown', updateEditor);
