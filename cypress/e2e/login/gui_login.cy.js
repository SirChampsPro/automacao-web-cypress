/// <reference types="Cypress"/>

import LoginPage from "../../support/pages/LoginPage";

describe('Validar fluxo de login', () => {
    it('Validar login com sucesso', () => {
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce')
        cy.get('[data-test="title"]').should('contain', 'Products')
    });
    it('Validar login com usuario invalido', () => {
        LoginPage.visit();
        LoginPage.login('standard_us', 'secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Realizar login com senha invalida', () => {
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sa')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
});