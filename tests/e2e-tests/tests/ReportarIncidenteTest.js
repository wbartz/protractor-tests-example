var reportar = require('../pages/ReportarIncidentePage.js');
var tutorial = require('../pages/TutorialPage.js');
var login = require('../pages/LoginPage.js');

describe('Reportar Incidente', function () {
    it('Reportar incidente com perfil de empregado com internet - campos obrigatórios', async function () {
        await tutorial.navegarTutorialContexto();
        await login.loginContexto('USER');
        await reportar.reportarIncidenteContexto('Teste', 'Teste automação');
    });
});













