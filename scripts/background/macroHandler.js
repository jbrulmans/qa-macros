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

    switch (command) {
        case COMMANDS.BUG:
            console.log("Bug testing macro typed.");
            chrome.storage.local.get('bug_template', function (data) {
                focusedElement.innerHTML = inputText.replace(command, data.bug_template);
            });
            break;
        case COMMANDS.SESSION:
            console.log("Session testing macro typed.");
            chrome.storage.local.get('session_template', function (data) {
                focusedElement.innerHTML = inputText.replace(command, data.session_template);
            });
            break;
        case COMMANDS.EXPLORATIVE:
            console.log("Explorative testing macro typed.");
            chrome.storage.local.get('explorative_template', function (data) {
                focusedElement.innerHTML = inputText.replace(command, data.explorative_template);
            });
            break;
        case COMMANDS.RC:
            console.log("RC testing macro typed.");
            chrome.storage.local.get('rc_template', function (data) {
                focusedElement.innerHTML = inputText.replace(command, data.rc_template);
            });
            break;
    }
}