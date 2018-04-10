var tutorial = require('../pages/TutorialPage.js');
var login = require('../pages/LoginPage.js');

describe('Login', function () {
    it('Login de empregado', async function () {
        await tutorial.navegarTutorialContexto();
        await login.loginContexto('PR5384');
        browser.debugger();
    });
});