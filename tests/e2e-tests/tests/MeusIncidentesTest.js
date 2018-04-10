var tutorial = require('../pages/TutorialPage.js');
var login = require('../pages/LoginPage.js');
var meusIncidentes = require('../pages/MeusIncidentesPage.js');

describe('Meus Incidentes', function () {
    it('Visualizar meus incidentes com perfil de empregado', async function () {
        await tutorial.navegarTutorialContexto();
        await login.loginContexto('PR5384');
        await meusIncidentes.meusIncidentesContexto();
        //browser.pause();
        browser.debugger();
    }); 
});












