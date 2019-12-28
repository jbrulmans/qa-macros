chrome.runtime.onInstalled.addListener(function() {

    // TODO: Find better solution for linking template strings
    /* Templates according to https://mysugr.atlassian.net/wiki/spaces/mysugr/pages/928189891/QA+Templates+for+Jira */
    chrome.storage.local.set(
        {
            bug_template: 'Session #1: Verifying fix\n' +
                'Build: 7eb173fd \n' +
                'Browser: Chrome 79.0.3945.88\n' +
                ':check_mark: VERIFIED\n',
            session_template: 'Session #\n' +
                'Goal: \n' +
                'Environment: \n' +
                'Session Duration: \n' +
                'Device(s): \n' +
                'Results:\n' +
                '(/)\n' +
                '(x)\n',
            explorative_template: 'exploratory testing done\n' +
                'with build XXX\n' +
                'with phones \n' +
                'TE\n' +
                '(/)\n' +
                '(X) discovered bug\n' +
                'Test cases are up-to-date',
            rc_template: 'RC testing done\n' +
                'with build XXX\n' +
                'with phone(s )\n' +
                'TE\n' +
                'Integration Run performed (PLEASE ALWAYS LINK to the Jira ticket)'
        },
        function() {
            console.log("Default templates are loaded.");
        }
    );
});
