/* ASCII (onkeypress) */
ascii = {
    backslash: 92
};
/* KEY CODES (onkeyup) */
keycode = {
    backspace: 8
};

/* keys buffer */
let buffer = [];
let saveKeysToBuffer = false;

if (window === top) {
    window.addEventListener('keypress', onKeyPress, false); //add the keyboard handler
    window.addEventListener("keyup", onKeyUp, false);
}

function onKeyUp(k) {
    if (k.keyCode === keycode.backspace) {
        backspace();
    }
}

function onKeyPress(k){
    if (k.keyCode === ascii.backslash) {
        backSlash();
    } else if (saveKeysToBuffer) {
        handleKey(String.fromCharCode(k.keyCode));
    }
}

function backspace() {
    console.log("Recorded key: Backspace");
    // If there is something in the buffer, remove the last item in the stack
    if (buffer.length > 0) {
        buffer.pop();
        // If this was the last key in the buffer (should be the backslash),
        // the recording of the keys, should be canceled until a new backslash
        // is typed
        if (buffer.length === 0) {
            saveKeysToBuffer = false;
            console.log("Last key in buffer deleted! Stopped recording the keys.")
        } else {
            console.log("Buffer: " + buffer.join(""));
        }
    }
}

function backSlash() {
    // Backslash is entered, so a new macro is to be expected, we clear the
    // buffer and start recording the keys again
    buffer.length = 0;
    buffer.push('\\'); // Push backslash in buffer
    saveKeysToBuffer = true;
    console.log("New backslash entered --> new buffer started");
    console.log("Buffer: " + buffer.join(""));
}

function handleKey(key) {
    buffer.push(key);
    console.log("Recorded key: " + key);
    console.log("Buffer: " + buffer.join(""));
}

/*
chrome.storage.local.get('bug_template', function (result) {
    const bug_template = result.bug_template;
    alert(bug_template);
})
*/