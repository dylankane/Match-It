# Testing

Return back to the [README.md](README.md) file.

In this section I will outline the tests I have put this project through, and the results of those tests


## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files. I have used the deployed live site to test this.


| Page | URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Single Page | [w3c HTML](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdylankane.github.io%2FMatch-It%2F) | ![screenshot](documentation/screenshot-w3c.png) | Pass: No Errors


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files. I have used to live deployed site for this validation test.

| Page | URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Single File | [w3c CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdylankane.github.io%2FMatch-It%2F) | ![screenshot css](documentation/screenshot-w3c-css.png) | Pass: No Erorrs | 





### JavaScript

I have used the recommended [JShint Validator](https://jshint.com) to validate all of my JS files.


| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![screenshot](documentation/screenshot-javascript.png) | "One warning 69 Confusing use of '!'". ( on line 57 of the actual script.js file, the validation found the use of the '!' to be confusing I did origanally write it differently, but i found this way to be less confusing) |

## Browser Compatibility

Use this space to discuss testing the live/deployed site on various browsers.

Consider testing at least 3 different browsers, if available on your system.

Recommended browsers to consider:
- [Chrome](https://www.google.com/chrome)
- [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer)
- [Edge](https://www.microsoft.com/edge)
- [Safari](https://support.apple.com/downloads/safari)
- [Brave](https://brave.com/download)
- [Opera](https://www.opera.com/download)

**IMPORTANT**: You must provide screenshots of the tested browsers, to "prove" that you've actually tested them.

Please note, there are services out there that can test multiple browser compatibilities at the same time.
Some of these are paid services, but some are free.
If you use these, you must provide a link to the source used for attribution, and multiple screenshots of the results.

Sample browser testing documentation:

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](documentation/browser-chrome.png) | Works as expected |
| Firefox | ![screenshot](documentation/browser-firefox.png) | Works as expected |
| Edge | ![screenshot](documentation/browser-edge.png) | Works as expected |
| Safari | ![screenshot](documentation/browser-safari.png) | Minor CSS differences |
| Brave | ![screenshot](documentation/browser-brave.png) | Works as expected |
| Opera | ![screenshot](documentation/browser-opera.png) | Minor differences |
| Internet Explorer | ![screenshot](documentation/browser-iex.png) | Does not work as expected |
| x | x | repeat for any other tested browsers |

## Responsiveness


I've tested my live deployed project on multiple devices to check for responsiveness issues.

| Device | Screenshot | Notes |
| --- | --- | --- |
| Mobile (pixel 6a) | ![screenshot mobile](documentation/mobile.png) | Works as expected |
| Tablet (lenovo) | ![screenshot tablet](documentation/tablet.jpeg) | Works as expected |
| Tablet (lenovo) | ![screenshot tablet](documentation/tablet-portrait.jpeg) | Issues with images on cards stretching |
| laptop (pixelbook) | ![screenshot](documentation/laptop.png) | Works as expected |
| Large Monitor (samsung) | ![screenshot](documentation/monitor.png) | Works as expected|


## Lighthouse Audit

I have also tested my live deployed site using the Lighthouse Audit tool. Done from within he dev tools in chrome. Below are the results.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Single page | Laptiop | ![screenshot lighthouse desktop](documentation/lighthouse-one.png) |  |
| Single Page | Mobile | ![screenshot lighthouse mobile](documentation/lighthouse-two.png) |  |


## Defensive Programming

<!-- Defensive programming was manually tested with the below user acceptance testing: -->

I have manually test the user interface with this application. The following table shows the different points of interaction, between the user and site, with the test and result.

| Page | User Action | Expected Result | Pass/Fail | Comments |
| --- | --- | --- | --- | --- |

| Single Page site | "Play Game" link in header | scrolls to game board area | pass | works as expected |

| Single Page site | "Restart" link under game board | re-sets game, (shuffle, moves to 0, clock to 45) | pass | works as expected |

| Single Page site | "How To Play" link uneder game board | scrolls to instruction area | pass | works as expected |

| Single Page site | "Play Game" link in intructions area |scrolls to game board and re-sets game  | pass | works as expected |

| Single Page site | "Restart" link in time up modal | closes modal and re-sets game | pass | works as expected |

| Single Page site | "Restart" link in congratulations modal | closes modal and re-sets game | pass | works as expected |

| Single Page site | Clicking a card on the game board | Flips the card over and shows image | pass | works as expected |

| Single Page site | clicking a second card on the game board | Flips a second card shows image, locks other cards from being clicked, if matched two card change colour and are disables from being clicked, if not, will flip back over. the board will be unlocked after either outcome, ready for another two clicks | pass | works as expected |


## Bugs

It's very important to document any bugs you've discovered while developing the project.
Make sure to include any necessary steps you've implemented to fix the bug(s) as well.

For JavaScript and Python applications, it's best to screenshot the errors to include them as well.

**PRO TIP**: screenshots of bugs are extremely helpful, and go a long way!

- JS Uncaught ReferenceError: `foobar` is undefined/not defined

    ![screenshot](documentation/bug01.png)

    - To fix this, I _____________________.

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

    ![screenshot](documentation/bug02.png)

    - To fix this, I _____________________.


### GitHub **Issues**

An improved way to manage bugs is to use the built-in **Issues** tracker on your GitHub repository.
To access your Issues, click on the "Issues" tab at the top of your repository.
Alternatively, use this link: https://github.com/dylankane/Match-It/issues

If using the Issues tracker for your bug management, you can simplify the documentation process.
Issues allow you to directly paste screenshots into the issue without having to first save the screenshot locally,
then uploading into your project.

You can add labels to your issues (`bug`), assign yourself as the owner, and add comments/updates as you progress with fixing the issue(s).

Once you've sorted the issue, you should then "Close" it.

When showcasing your bug tracking for assessment, you can use the following format:

**Fixed Bugs**

All previously closed/fixed bugs can be tracked [here](https://github.com/dylankane/Match-It/issues?q=is%3Aissue+is%3Aclosed).

| Bug | Status |
| --- | --- |
| [JS Uncaught ReferenceError: `foobar` is undefined/not defined](https://github.com/dylankane/Match-It/issues/1) | Closed |
| [Python `'ModuleNotFoundError'` when trying to import module from imported package](https://github.com/dylankane/Match-It/issues/2) | Closed |
| [Django `TemplateDoesNotExist` at /appname/path appname/template_name.html](https://github.com/dylankane/Match-It/issues/3) | Closed |

**Open Issues**

Any remaining open issues can be tracked [here](https://github.com/dylankane/Match-It/issues).

| Bug | Status |
| --- | --- |
| [JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).](https://github.com/dylankane/Match-It/issues/4) | Open |
| [Python `E501 line too long` (93 > 79 characters)](https://github.com/dylankane/Match-It/issues/5) | Open |

## Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed.
This section should include shortcomings of the frameworks or technologies used.
Although time can be a big variable to consider, paucity of time and difficulty understanding
implementation is not a valid reason to leave bugs unfixed.

If you've identified any unfixed bugs, no matter how small, be sure to list them here.
It's better to be honest and list them, because if it's not documented and an assessor finds the issue,
they need to know whether or not you're aware of them as well, and why you've not corrected/fixed them.

Some examples:

- On devices smaller than 375px, the page starts to have `overflow-x` scrolling.

    ![screenshot](documentation/unfixed-bug01.png)

    - Attempted fix: I tried to add additional media queries to handle this, but things started becoming too small to read.

- For PP3, when using a helper `clear()` function, any text above the height of the terminal does not clear, and remains when you scroll up.

    ![screenshot](documentation/unfixed-bug02.png)

    - Attempted fix: I tried to adjust the terminal size, but it only resizes the actual terminal, not the allowable area for text.

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`. This is acceptable.

    ![screenshot](documentation/unfixed-bug03.png)

    - Attempted fix: this is a known warning and acceptable, and my section doesn't require a header since it's dynamically added via JS.

If you legitimately cannot find any unfixed bugs or warnings, then use the following sentence:

There are no remaining bugs that I am aware of.
