/// <reference types="cypress"/>

import LoginPage from "../../support/pages/LoginPage";

describe('Validar fluxo de login', () => {
    it('Validar login com sucesso', () => {
        LoginPage.visit();

        cy.screenshot();

        LoginPage.login('standard_user', 'secret_sauce');

        cy.screenshot();

        LoginPage.clicarLogin();

        cy.get('[data-test="title"]').should('contain', 'Products');

        cy.screenshot();
    });
    it('Validar login com usuario invalido', () => {
        LoginPage.visit();

        cy.screenshot();

        LoginPage.login('standard_us', 'secret_sauce');

        cy.screenshot();

        LoginPage.clicarLogin();

        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');

        cy.screenshot();
    });

    it('Realizar login com senha invalida', () => {
        LoginPage.visit();
        
        cy.screenshot();

        LoginPage.login('standard_user', 'secret_sa');

        cy.screenshot();

        LoginPage.clicarLogin();

        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');

        cy.screenshot();
    });
});