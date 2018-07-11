var tutorial = require('../pages/TutorialPage.js');
var login = require('../pages/LoginPage.js');
var telefonesEmergencia = require('../pages/TelefonesEmergenciaPage.js');

describe('Telefones Emergência', function () {
    it('Visualizar a tela de telefones de emergência', async function () {
        await tutorial.navegarTutorialContexto();
        await login.loginContexto('USER');
        await telefonesEmergencia.telefonesEmergenciaContexto();
        browser.debugger();
    });
});













