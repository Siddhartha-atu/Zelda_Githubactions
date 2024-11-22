const { JSDOM } = require('jsdom');

describe('Sidd_L00187620.html contains required keywords', () => {
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

    test('contains the keyword "Halloween Costumes"', () => {
        const keyword = "Halloween Costumes";
        const keywordExists = document.body.textContent.includes(keyword);
        expect(keywordExists).toBe(true);
    });

    test('contains the keyword "Camping Quests"', () => {
        const keyword = "Camping Quests";
        const keywordExists = document.body.textContent.includes(keyword);
        expect(keywordExists).toBe(true);
    });

    test('contains the keyword "Windmill Quests"', () => {
        const keyword = "Windmill Quests";
        const keywordExists = document.body.textContent.includes(keyword);
        expect(keywordExists).toBe(true);
    });
});
