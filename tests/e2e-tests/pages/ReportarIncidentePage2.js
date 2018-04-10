'use strict';

var ReportarIncidentePage = function () {
    this.botaoReportarIncidente = element(by.partialButtonText('INCIDENTE'));
    this.abrirAreas = element(by.className('text-input ng-pristine'));
    this.selecionarArea = element(by.cssContainingText('.label', 'SÃO PAULO'));
    this.botaoSalvar = element(by.cssContainingText('.button-inner', 'Salvar'));
    this.campoLocal = element.all(by.tagName('textarea')).first();
    this.campoSituacao = element.all(by.tagName('textarea')).last();
    this.botaoEnviar = element(by.cssContainingText('.button-inner', 'Enviar'));
    this.mensagemConfirmacao = element(by.xpath('//html/body/ion-app/ion-modal/div/modal-alert/ion-content/div[2]/div[2]/strong'));
    this.radioSim = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-incident-new/ion-content/div[2]/ion-list/ion-list/ion-row/ion-col[2]'));
    this.campoQuantidadePessoas = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-incident-new/ion-content/div[2]/ion-list/div/ion-item/div[1]/div/ion-input/input[1]'));
    this.checkboxEmpregado = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-incident-new/ion-content/div[2]/ion-list/div/ion-list/ion-item[1]/ion-checkbox'));
    this.checkboxPrestadorServiço = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-incident-new/ion-content/div[2]/ion-list/div/ion-list/ion-item[2]/ion-checkbox'));
    this.checkboxVisitante = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-incident-new/ion-content/div[2]/ion-list/div/ion-list/ion-item[3]/ion-checkbox'));
    this.checkboxOutros = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-incident-new/ion-content/div[2]/ion-list/div/ion-list/ion-item[4]/ion-checkbox'));
    this.campoOutrosEnvolvidos = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-incident-new/ion-content/div[2]/ion-list/div/ion-item[2]/div[1]/div/ion-textarea/textarea'));

    this.clicarBotaoReportarIncidente = async function () {
        await this.botaoReportarIncidente.click();
    }

    this.abrirListaAreas = async function () {
        await this.abrirAreas.click();
    }

    this.setarUmaArea = async function () {
        await this.selecionarArea.click();
    }

    this.clicarBotaoSalvar = async function () {
        await this.botaoSalvar.click();
    }

    this.preencherCampoLocal = async function (local) {
        await this.campoLocal.sendKeys(local);
    }

    this.preencherCampoSituacao = async function (situacao) {
        await this.campoSituacao.sendKeys(situacao);
    }

    this.acionarRadioSim = async function () {
        await this.radioSim.click();
    }

    this.preencherCampoQuantidadePessoas = async function (quantidade) {
        await this.campoQuantidadePessoas.sendKeys(quantidade);
    }

    this.acionarCheckboxEmpregado = async function () {
        await this.checkboxEmpregado.click();
    }

    this.acionarCheckboxPrestadorServiço = async function () {
        await this.checkboxPrestadorServiço.click();
    }

    this.acionarcheckboxVisitante = async function () {
        await this.checkboxVisitante.click();
    }

    this.acionarCheckboxOutros = async function () {
        await this.checkboxOutros.click();
    }
    
    this.preencherCampoOutrosEnvolvidos = async function (outros) {
        await this.campoOutrosEnvolvidos.sendKeys(outros);
    }

    this.clicarBotaoEnviar = async function () {
        await this.botaoEnviar.click();
    }

    this.verificarMensagen = async function () {
        await expect(this.mensagemConfirmacao.getText()).toBe('Reporte enviado');
    }

    this.reportarIncidenteContexto = async function(local, situacao, quantidade, outros){
        await this.clicarBotaoReportarIncidente();
        await this.abrirListaAreas();
        await this.setarUmaArea();
        await this.clicarBotaoSalvar();
        await this.preencherCampoLocal(local);
        await this.preencherCampoSituacao(situacao);
        await this.acionarRadioSim();
        await this.preencherCampoQuantidadePessoas(quantidade);
        await this.acionarCheckboxEmpregado();
        await this.acionarCheckboxPrestadorServiço();
        await this.acionarcheckboxVisitante();
        await this.acionarCheckboxOutros();
        await this.preencherCampoOutrosEnvolvidos(outros);
        await this.clicarBotaoEnviar();
        await this.verificarMensagen();
    }
}

module.exports = new ReportarIncidentePage();