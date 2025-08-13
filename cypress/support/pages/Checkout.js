class Checkout {

    preencherPrimeiroNome(primeiroNome) {
        cy.get('[data-test="firstName"]').type(primeiroNome);
    }

    preencherUltimoNome(ultimoNome) {
        cy.get('[data-test="lastName"]').type(ultimoNome);
    }

    preencherCodigoPostal(codigo) {
        cy.get('[data-test="postalCode"]').type(codigo);
    }

    clicarConfirmacao() {
        cy.get('[data-test="continue"]').click();
    }

    preencherFormulario(primeiroNome, ultimoNome, codigo) {
        this.preencherPrimeiroNome(primeiroNome);
        this.preencherUltimoNome(ultimoNome);
        this.preencherCodigoPostal(codigo);
    }
}

export default new Checkout();