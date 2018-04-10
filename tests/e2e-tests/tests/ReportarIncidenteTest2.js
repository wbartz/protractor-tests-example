var tutorial = require('../pages/TutorialPage.js');
var login = require('../pages/LoginPage.js');
var reportar = require('../pages/ReportarIncidentePage2.js');

describe('Reportar Incidente', function () {
    it('Reportar incidente com perfil de empregado com internet - campos obrigatórios + outros envolvidos ', async function () {
        await tutorial.navegarTutorialContexto();
        await login.loginContexto('PR5384');
        await reportar.reportarIncidenteContexto('Teste', 'Teste automação', '4', 'Teste');
    }); 
});













