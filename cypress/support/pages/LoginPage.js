class LoginPage {
    visit() {
        cy.visit("https://www.saucedemo.com/")
    }

    preencherUsuario(usuario) {
        cy.get('[data-test="username"]').type(usuario)
    }

    preencherSenha(senha) {
        cy.get('[data-test="password"]').type(senha)
    }

    clicarLogin() {
        cy.get('[data-test="login-button"]').click()
    }

    login(usuario, senha) {
        this.preencherUsuario(usuario)
        this.preencherSenha(senha)
        this.clicarLogin();
    }
}

export default new LoginPage();