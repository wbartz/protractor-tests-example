'use strict';

var protractor = require('protractor');
var Expected = protractor.ExpectedConditions;

var TutorialPage = function () {
    // Messages
    var firstMessage = 'Com o Engie Health&Safety, todo empregado ou visitante é um agente de segurança.';
    var secondMessage = 'Estando em uma usina ou planta da Engie Brasil, utilize o aplicativo para alertar sobre situações de risco.';
    var lastMessage = 'Basta fotografar e enviar informações básicas sobre o ocorrido. Juntos, cuidaremos da segurança de todos.';

    // Elements
    this.firstJump = element.all(by.buttonText('Pular')).first();
    this.secondJump = element.all(by.buttonText('Pular')).last();
    this.enter = element(by.buttonText('Entrar'));
    this.pag1 = element(by.css('[aria-label="Go to slide 1"]'));
    this.pag2 = element(by.css('[aria-label="Go to slide 2"]'));
    this.pag3 = element(by.css('[aria-label="Go to slide 3"]'));
    this.btnEmpregado = element(by.cssContainingText('.button-inner', 'Sou empregado'));
    this.btnTerceiro = element(by.cssContainingText('.button-inner', 'Sou terceiro'));

    this.firstSlide = async function () {
        await this.pag1.click();
    }

    this.verifyFirstSlide = async function () {
        await expect(element(by.cssContainingText('.info-text', 'Health')).getText()).toBe(firstMessage);
    }

    this.secondSlide = async function () {
        await this.pag2.click();
    }

    this.verifySecondSlide = async function () {
        await expect(element(by.cssContainingText('.info-text', 'Estando em')).getText()).toBe(secondMessage);
    }

    this.lastSlide = async function () {
        await this.pag3.click();
    }

    this.verifyLastSlide = async function () {
        await expect(element(by.cssContainingText('.info-text', 'Basta fotografar')).getText()).toBe(lastMessage);
    }

    this.skipTutorial = async function () {
        await this.firstJump.click();
    }

    this.verifySkipTutorial = async function () {
        await Expected.presenceOf(this.btnEmpregado);
    }

    this.navegarTutorialContexto = async function(){
        await this.secondSlide();
        await this.verifySecondSlide();
        await this.lastSlide();
        await this.verifyLastSlide();
        await this.firstSlide();
        await this.verifyFirstSlide();
        await this.skipTutorial();
        await this.verifySkipTutorial();
    }
}

module.exports = new TutorialPage();
