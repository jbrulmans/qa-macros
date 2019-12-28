/* keys buffer */
let buffer = [];
let saveKeysToBuffer = false;

if (window === top) {
    document.addEventListener("keyup", function (event) {
        if (event.target.matches('.ProseMirror')) {
            checkInput();
        }
    }, false);
}

function checkInput() {
    const inputText = document.activeElement.innerHTML;
    console.log(inputText);

    for (let command in COMMANDS) {
        if (inputText.toLowerCase().includes(COMMANDS[command]))
            replaceTemplate(COMMANDS[command]);
    }
}

function replaceTemplate(command) {
    const focusedElement = document.activeElement;
    const inputText = document.activeElement.innerHTML;
    let url;

    switch (command) {
        case COMMANDS.BUG:
            console.log("Bug testing macro typed.");
            url = chrome.runtime.getURL(TEMPLATES.BUG);
            break;
        case COMMANDS.SESSION:
            console.log("Session testing macro typed.");
            url = chrome.runtime.getURL(TEMPLATES.SESSION);
            break;
        case COMMANDS.EXPLORATIVE:
            console.log("Explorative testing macro typed.");
            url = chrome.runtime.getURL(TEMPLATES.EXPLORATIVE);
            break;
        case COMMANDS.RC:
            console.log("RC testing macro typed.");
            url = chrome.runtime.getURL(TEMPLATES.RC);
            break;
    }

    fetch(url)
        .then(response => {return response.text();})
        .then(data => {focusedElement.innerHTML = data;})
}