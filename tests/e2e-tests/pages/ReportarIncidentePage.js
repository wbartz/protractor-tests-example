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

    this.clicarBotaoEnviar = async function () {
        await this.botaoEnviar.click();
    }

    this.verificarMensagen = async function () {
        await expect(this.mensagemConfirmacao.getText()).toBe('Reporte enviado');
    }

    this.reportarIncidenteContexto = async function(local, situacao){
        await this.clicarBotaoReportarIncidente();
        await this.abrirListaAreas();
        await this.setarUmaArea();
        await this.clicarBotaoSalvar();
        await this.preencherCampoLocal(local);
        await this.preencherCampoSituacao(situacao);
        await this.clicarBotaoEnviar();
        await this.verificarMensagen();
    }
}

module.exports = new ReportarIncidentePage();