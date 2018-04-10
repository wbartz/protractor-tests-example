'use strict';

var MeusIncidentesPage = function () {
    this.botaoMenu = element(by.className('disable-hover bar-buttons bar-buttons-md bar-button bar-button-md bar-button-default bar-button-default-md bar-button-menutoggle bar-button-menutoggle-md'));
    this.botaoMeusIncidentes = element(by.cssContainingText('.label', 'Meus incidentes'));
    this.botaoEmAberto = element(by.cssContainingText('.item-inner', 'Em aberto'));
    this.umIncidente = element(by.cssContainingText('.label', 'Teste automação'));
    this.tituloTela = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-incident-detail/ion-header/header-logged-in/ion-navbar/div[2]/ion-title'));

    this.clicarBotaoMenu = async function(){
        await this.botaoMenu.click();
    }

    this.clicarBotaoMeusIncidentes = async function(){
        await this.botaoMeusIncidentes.click();
    }

    this.clicarBotaoEmAberto = async function(){
        await this.botaoEmAberto.click();
    }

    this.clicarEmUmIncidente = async function(){
        await this.umIncidente.click();
    }

    this.verificarTituloTela = async function () {
        await expect(this.tituloTela.getText()).toBe('Detalhe do incidente');
    }

    this.meusIncidentesContexto = async function(){
        await this.clicarBotaoMenu();
        await this.clicarBotaoMeusIncidentes();
        await this.clicarBotaoEmAberto();
        await this.clicarEmUmIncidente();
        await this.verificarTituloTela();
    }
}

module.exports = new MeusIncidentesPage();