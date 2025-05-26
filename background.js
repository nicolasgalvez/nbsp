// background.js
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: removeEmptyParagraphs
    });
});

function removeEmptyParagraphs() {
    // This function will be executed in the context of the web page
    const paragraphs = document.querySelectorAll('p');
    let count = 0;

    paragraphs.forEach(p => {
        if (p.innerHTML === '&nbsp;' || p.innerHTML === ' ' || p.innerHTML === '&#160;') {
            p.remove();
            count++;
        }
        // set margin to 6px 0
        p.style.margin = '6px 0';
        // set line height to 1.5
    });


    console.log(`Removed ${count} empty paragraph tags from this page.`);
}
