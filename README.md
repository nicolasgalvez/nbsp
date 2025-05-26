## Empty Paragraph Remover - Chrome Extension

This Chrome extension automatically removes `<p>&nbsp;</p>` tags from web pages, helping to clean up pages with unnecessary empty paragraphs.

### Features

- Automatically removes empty paragraphs (containing only &nbsp;) when a page loads
- Works with dynamically loaded content through a MutationObserver
- Can also be manually triggered by clicking the extension icon
- Shows a count of how many empty paragraphs were removed

### Installation Instructions

1. **Download the extension files**
   - Create a new folder on your computer called "Empty-Paragraph-Remover"
   - Save all the code files from this artifact into that folder
   - Create a subfolder called "images" for the icon files

2. **Create icon files**
   - You'll need icons in 16x16, 48x48, and 128x128 pixel sizes
   - You can create simple icons using any image editor or icon generator
   - Save them as PNG files named "icon16.png", "icon48.png", and "icon128.png" in the "images" folder

3. **Load the extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" by toggling the switch in the top-right corner
   - Click the "Load unpacked" button
   - Select the "Empty-Paragraph-Remover" folder you created
   - The extension should now be installed and active

### How to Use

- **Automatic mode**: The extension will automatically remove empty paragraphs when any page loads
- **Manual mode**: Click the extension icon in your toolbar to manually trigger the removal and see how many paragraphs were removed

### Customization

You can modify the `content.js` file to target additional types of empty HTML elements if needed. For example, to also remove empty div tags, you could add similar code to target those elements.

### Troubleshooting

If the extension isn't working as expected:
1. Make sure it's enabled in chrome://extensions/
2. Check the browser console for any error messages
3. Refresh the page to try again
4. For complex pages with frames or shadow DOM, some elements might not be accessible

### Privacy Notice

This extension only modifies the visual appearance of web pages you visit and does not collect or transmit any data.