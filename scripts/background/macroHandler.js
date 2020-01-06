let autoComplete = null;

if (window === top) {
    document.addEventListener("focus", function (event) {
        /*if (event.target.matches(SELECTORS.NEW_JIRA)) {
            if (autoComplete === null)
                initializeAutoComplete(SELECTORS.NEW_JIRA);
        }*/
        if (event.target.matches(SELECTORS.OLD_JIRA)) {
            if (autoComplete === null)
                initializeAutoComplete(SELECTORS.OLD_JIRA);
        }
    }, true);
    document.addEventListener("keyup", function (event) {
        if (event.target.matches(SELECTORS.NEW_JIRA)) {
            let activeElement = document.activeElement;
            checkInput(activeElement.innerHTML, false);
        }
        if (event.target.matches(SELECTORS.OLD_JIRA)) {
            let activeElement = document.activeElement;
            checkInput(activeElement.value, true);
        }
    }, false);
}

function initializeAutoComplete(selector) {
    autoComplete = new Tribute({
        trigger: TRIGGER_SYMBOL,
        values : loadMacros(),
        menuItemTemplate: function (item) {
            return TRIGGER_SYMBOL + item.original.value;
        },
        selectTemplate: function (item) {
            return TRIGGER_SYMBOL + item.original.value;
        }
    });
    autoComplete.attach(document.querySelectorAll(selector));
}

function loadMacros() {
    let values = [];
    for (let command in COMMANDS) {
        values.push({key: COMMANDS[command], value: COMMANDS[command]});
    }
    return values;
}

function checkInput(inputText, usesOldView) {
    for (let command in COMMANDS) {
        if (inputText.toLowerCase().includes(TRIGGER_SYMBOL + COMMANDS[command]))
            if (usesOldView)
                replaceOldView(COMMANDS[command]);
            else
                replaceNewView(COMMANDS[command]);
    }
}

function replaceNewView(command) {
    const focusedElement = document.activeElement;
    let url;

    switch (command) {
        case COMMANDS.BUG:
            url = chrome.runtime.getURL(TEMPLATES_NEW_VIEW.BUG);
            break;
        case COMMANDS.SESSION:
            url = chrome.runtime.getURL(TEMPLATES_NEW_VIEW.SESSION);
            break;
        case COMMANDS.EXPLORATORY:
            url = chrome.runtime.getURL(TEMPLATES_NEW_VIEW.EXPLORATORY);
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
    let url;

    switch (command) {
        case COMMANDS.BUG:
            url = chrome.runtime.getURL(TEMPLATES_OLD_VIEW.BUG);
            break;
        case COMMANDS.SESSION:
            url = chrome.runtime.getURL(TEMPLATES_OLD_VIEW.SESSION);
            break;
        case COMMANDS.EXPLORATORY:
            url = chrome.runtime.getURL(TEMPLATES_OLD_VIEW.EXPLORATORY);
            break;
        case COMMANDS.RC:
            url = chrome.runtime.getURL(TEMPLATES_OLD_VIEW.RC);
            break;
    }

    fetch(url)
        .then(response => {return response.text();})
        .then(data => {focusedElement.value = data;})
}