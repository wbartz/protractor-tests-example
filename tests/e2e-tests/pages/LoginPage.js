'use strict';

var LoginPage = function () {
    // Elements
    this.username = element(by.className('text-input'));
    this.btnTipoUsuario = element(by.cssContainingText('.button-inner', 'Sou empregado'));
    this.checkbox = element(by.className('item-checkbox'));
    this.btnTermos = element(by.cssContainingText('.button-inner', 'Aceito os termos'));
    var btnSolicitarAcesso = element(by.cssContainingText('.button-inner', 'Solicitar acesso'));
    this.botaoReportarIncidenteParaValidacaoLogin = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/home/ion-content/div[2]/ion-grid/ion-row[2]/ion-col/button[1]/span/div/label/small'));

    this.clickTipoUsuario = async function () {
        await this.btnTipoUsuario.click();
    }

    this.setUsername = async function (username) {
        await this.username.sendKeys(username);
    }

    this.clickCheckbox = async function () {
        await this.checkbox.click();
    }

    this.clickTermos = async function () {
        await this.btnTermos.click();
    }

    /*this.clickSolicitarAcesso = async function () {
        await this.btnSolicitarAcesso.click();
    }*/
    async function clickSolicitarAcesso () {
        await btnSolicitarAcesso.click();
    }

    this.validacaoLogin = async function () {
        await expect(this.botaoReportarIncidenteParaValidacaoLogin.getText()).toBe('Reportar');
    }

    this.loginContexto = async function(usuario) {
        await this.clickTipoUsuario();
        await this.setUsername(usuario);
        await this.clickCheckbox();
        await this.clickTermos();
        await clickSolicitarAcesso();
        await this.validacaoLogin();
    }
}

module.exports = new LoginPage();