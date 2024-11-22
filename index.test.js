const { JSDOM } = require('jsdom');

describe('To check zelda zelda contains all three update', () => {
    const html = `
        <html>
        <body>
            <p>Halloween Costumes</p>
            <p>Camping Quests</p>
            <p>Windmill Quests</p>
        </body>
        </html>
    `;
    const dom = new JSDOM(html);
    const document = dom.window.document;

    test('contains the update related to "Halloween Costumes"', () => {
        const keyword = "Halloween Costumes";
        const keywordExists = document.body.textContent.includes(keyword);
        expect(keywordExists).toBe(true);
    });

    test('contains the update related to  "Camping Quests"', () => {
        const keyword = "Camping Quests";
        const keywordExists = document.body.textContent.includes(keyword);
        expect(keywordExists).toBe(true);
    });

    test('contains the update related to  "Windmill Quests"', () => {
        const keyword = "Windmill Quests";
        const keywordExists = document.body.textContent.includes(keyword);
        expect(keywordExists).toBe(true);
    });
});
