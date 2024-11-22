const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Check if Sidd_L00187620.html has updated features Halloween Costumes", "Camping Quests", "Windmill Quests', () => {
    // Load the HTML file
    const html = fs.readFileSync(path.resolve(__dirname, 'Sidd_L00187620.html'), 'utf8');
    const dom = new JSDOM(html);

    // Get the document from the DOM
    const document = dom.window.document;

    // Keywords to check
    const keywords = ["Halloween Costumes", "Camping Quests", "Windmill Quests"];

    // Loop through keywords and check if they exist in the document
    keywords.forEach(keyword => {
        const keywordExists = document.body.textContent.includes(keyword);
        expect(keywordExists).toBe(true); // Test passes if the keyword is found
    });
});
