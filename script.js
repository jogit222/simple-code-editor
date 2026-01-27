const input = document.getElementById('input-area');
const visual = document.getElementById('visual-layer');     
console.log(synthaxDB);
const eventColor = '#f58105';
const expressionColor = '#22c93b';
const effectColor = '#102eb5';
const conditionColor = '#e3b922';
const structureColor = '#147d78';
const sectionsColor = '#12b39a';
const functionColor = '#a8a8a8';
const itemColor = '#8f10b5';
const miscColor = '#606361';


function updateEditor()    {
    const words = input.value.split(' ');
    for (const item in words)   {
        if (synthaxDB.events.includes('$item'))  {
            visual.innerHTML += '<span style="color: ${eventColor}">${item}</span>';
        }
    }
}





input.addEventListener('keyup', updateEditor);
