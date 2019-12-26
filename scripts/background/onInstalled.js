chrome.runtime.onInstalled.addListener(function() {

    // TODO: Find better solution for linking template strings
    /* Templates according to https://mysugr.atlassian.net/wiki/spaces/mysugr/pages/928189891/QA+Templates+for+Jira */
    chrome.storage.local.set(
        {
            bug_template: 'Session #1: Verifying fix\n' +
                '\n' +
                'Build: 7eb173fd \n' +
                '\n' +
                'Browser: Chrome 79.0.3945.88\n' +
                '\n' +
                ':check_mark: VERIFIED',
            session_template: 'Session #\n' +
                '\n' +
                'Goal: \n' +
                '\n' +
                'Environment: \n' +
                '\n' +
                'Session Duration: \n' +
                '\n' +
                'Device(s): \n' +
                '\n' +
                'Results:\n' +
                '\n' +
                '(/)\n' +
                '\n' +
                '(x)',
            explorative_template: 'exploratory testing done\n' +
                '\n' +
                'with build XXX\n' +
                '\n' +
                'with phones \n' +
                '\n' +
                'TE\n' +
                '\n' +
                '(/) \n' +
                '\n' +
                '(X) discovered bug\n' +
                '\n' +
                'Test cases are up-to-date',
            rc_testing: 'RC testing done\n' +
                '\n' +
                'with build XXX\n' +
                '\n' +
                'with phone(s )\n' +
                '\n' +
                'TE\n' +
                '\n' +
                'Integration Run performed (PLEASE ALWAYS LINK to the Jira ticket)'
        },
        function() {
            console.log("Default templates are loaded.");
        }
    );
});
