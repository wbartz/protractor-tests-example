'use strict';

var TelefonesEmergenciaPage = function () {
    this.botaoTelefonesEmergencia = element(by.partialButtonText('EMERGÊNCIA'));
    this.tituloTela = element(by.xpath('/html/head/title'));

    this.clicarBotaoTelefonesEmergencia = async function () {
        await this.botaoTelefonesEmergencia.click();
    }

    this.verificarTituloTela = async function () {
        await expect(this.tituloTela.getText()).toBe('Telefones de emergência');
        //expect(object).toEqual(value, [message])
    }

    this.telefonesEmergenciaContexto = async function(){
        await this.clicarBotaoTelefonesEmergencia();
        // Fazer a validação quando a página terminar de carregar
        //await this.verificarTituloTela();
    }
}

module.exports = new TelefonesEmergenciaPage();