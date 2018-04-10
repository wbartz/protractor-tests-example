'use strict';

var EstabelecimetosSaudePage = function () {
    this.botaoEstabelecimetosSaude = element(by.partialButtonText('SAÚDE'));
    //this.mensagemConfirmacao = element(by.xpath('//html/body/ion-app/ion-modal/div/modal-alert/ion-content/div[2]/div[2]/strong'));

    this.clicarBotaoEstabelecimetosSaude = async function () {
        await this.botaoEstabelecimetosSaude.click();
    }

    /*
    this.verificarMensagen = async function () {
        await expect(this.mensagemConfirmacao.getText()).toBe('Reporte enviado');
    }
    */

    this.estabelecimetosSaudeContexto = async function(){
        await this.clicarBotaoEstabelecimetosSaude();
        //await this.verificarMensagen();
    }
}

module.exports = new EstabelecimetosSaudePage();