if (window === top) {
    document.addEventListener("keyup", function (event) {
        // NEW jira view
        if (event.target.matches('.ProseMirror')) {
            checkInput(document.activeElement.innerHTML, false);
        }
        // OLD jira view
        if (event.target.matches('#comment')) {
            checkInput(document.getElementById("comment").value, true);
        }
    }, false);
}


function checkInput(inputText, usesOldView) {
    for (let command in COMMANDS) {
        if (inputText.toLowerCase().includes(COMMANDS[command]))
            if (usesOldView)
                replaceOldView(COMMANDS[command]);
            else
                replaceNewView(COMMANDS[command]);
    }
}

function replaceNewView(command) {
    const focusedElement = document.activeElement;
    const inputText = document.activeElement.innerHTML;
    let url;

    switch (command) {
        case COMMANDS.BUG:
            url = chrome.runtime.getURL(TEMPLATES_NEW_VIEW.BUG);
            break;
        case COMMANDS.SESSION:
            url = chrome.runtime.getURL(TEMPLATES_NEW_VIEW.SESSION);
            break;
        case COMMANDS.EXPLORATIVE:
            url = chrome.runtime.getURL(TEMPLATES_NEW_VIEW.EXPLORATIVE);
            break;
        case COMMANDS.RC:
            url = chrome.runtime.getURL(TEMPLATES_NEW_VIEW.RC);
            break;
    }

    fetch(url)
        .then(response => {return response.text();})
        .then(data => {focusedElement.innerHTML = data;})
}

function replaceOldView(command) {
    const focusedElement = document.activeElement;
    const inputText = document.activeElement.value;
    let url;

    switch (command) {
        case COMMANDS.BUG:
            url = chrome.runtime.getURL(TEMPLATES_OLD_VIEW.BUG);
            break;
        case COMMANDS.SESSION:
            url = chrome.runtime.getURL(TEMPLATES_OLD_VIEW.SESSION);
            break;
        case COMMANDS.EXPLORATIVE:
            url = chrome.runtime.getURL(TEMPLATES_OLD_VIEW.EXPLORATIVE);
            break;
        case COMMANDS.RC:
            url = chrome.runtime.getURL(TEMPLATES_OLD_VIEW.RC);
            break;
    }

    fetch(url)
        .then(response => {return response.text();})
        .then(data => {focusedElement.value = data;})
}