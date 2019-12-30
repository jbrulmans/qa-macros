
# myMacros

myMacros is a Google Chrome extension which allows the usage of certain macros in Jira to quickly load specific templates.

## Installation

### Chrome Web Store

Use the [Chrome Web Store]() to install myMacros and get new updates automatically.

Due to long review processes for the Chrome web store, it can occur that the latest release is not always published yet before it's released here. If you do however want the latest release, consider installing the extension manually, as explained below.

### Manually

1. Download the latest release zip [here](https://github.com/jbrulmans/qa-macros/releases).
2. Unzip the release zip.
3. Navigate to `chrome://extensions/` in your Google Chrome browser.
4. At the top right, turn on _Developer mode_.
5. Click _Load unpacked_.
6. Find and select the root of the unzipped extension folder.
7. _myMacros_ should now appear in your list of extensions.

## Usage
In any Jira comment or input field, the following macros can be used to quickly load specific templates:

```
\bug            # replaced by default template for verifying a bug
\session        # replaced by default template for Session testing
\explorative    # replaced by default template for Explorative testing
\rc             # replaced by default template for Release Candidate testing
```

![](demo/bug.gif)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)
