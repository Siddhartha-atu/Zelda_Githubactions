const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Check if Aishwarya is displayed in the HTML', () => {
    // Load the HTML file
    const html = fs.readFileSync(path.resolve(__dirname, 'Myname assignment.html'), 'utf8');
    const dom = new JSDOM(html);

    // Get the document from the DOM
    const document = dom.window.document;

    // Check if the name container exists
    const nameContainer = document.querySelector('.name-container');
    expect(nameContainer).not.toBeNull();

    // Check the content inside the name container
    expect(nameContainer.textContent.trim()).toBe('Aishwarya');

    // Optional: Check if the name container has specific styles
    const computedStyles = nameContainer.style;
    expect(computedStyles.color).toBe('');
    expect(computedStyles.backgroundColor).toBe('');
});  
