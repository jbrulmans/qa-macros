chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
        console.log("The color is green.");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'mysugr.atlassian.net'},
                css: [".akEditor"] // Only activate the extension when we are on a page in Jira with a comment box
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});