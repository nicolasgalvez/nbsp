// content.js
// This script runs automatically on page load
function autoRemoveEmptyParagraphs() {
  const paragraphs = document.querySelectorAll('p');
  let count = 0;

  paragraphs.forEach(p => {
    if (p.innerHTML === '&nbsp;' || p.innerHTML === ' ' || p.innerHTML === '&#160;') {
      p.remove();
      count++;
    }
    // set margin to 6px 0
    p.style.margin = '6px 0';
  });

  if (count > 0) {
    console.log(`Empty Paragraph Remover: Automatically removed ${count} empty paragraph tags.`);
  }
}

// Run initial removal
autoRemoveEmptyParagraphs();

// Set up a MutationObserver to handle dynamically added content
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      autoRemoveEmptyParagraphs();
    }
  });
});

// Start observing the document with the configured parameters
observer.observe(document.body, { childList: true, subtree: true });
