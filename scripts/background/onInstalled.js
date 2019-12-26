chrome.runtime.onInstalled.addListener(function() {

    // TODO: Set default templates for commands in chrome.storage
    // TODO: Find better solution for linking template strings
    chrome.storage.local.set(
        {
            bug_template: 'Session #1: Verifying fix\n' +
                '\n' +
                'Build: c6742e1d \n' +
                '\n' +
                'Browsers:\n' +
                '\n' +
                'Chrome 78.0.3904.108\n' +
                '\n' +
                'Firefox 70.0.1\n' +
                '\n' +
                'Safari 13.0.3\n' +
                '\n' +
                'Edge 44.17763.831.0\n' +
                '\n' +
                ' VERIFIED: Unnecessary tooltips for various dates'
        },
        function() {
            console.log("Default templates are loaded.");
        }
    );
});
