var tutorial = require('../pages/TutorialPage.js');
var login = require('../pages/LoginPage.js');
var estabelecimetosSaude = require('../pages/EstabelecimentosSaudePage.js');

describe('Estabelecimetos Saúde', function () {
    it('Estabelecimetos Saúde', async function () {
        await tutorial.navegarTutorialContexto();
        await login.loginContexto('USER');
        await estabelecimetosSaude.estabelecimetosSaudeContexto();
        browser.debugger();
    });
});













