var tutorial = require('../pages/TutorialPage.js');

describe('Tutorial', function(){
    it('Navegar e pular o tutorial', async function(){
        await tutorial.navegarTutorialContexto();
        browser.debugger();
    });
});