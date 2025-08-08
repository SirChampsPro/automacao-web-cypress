/// <reference types="Cypress"/>
import LoginPage from "../../support/pages/LoginPage";
describe('Validar fluxo checkout', () => {
    it('Realizar login', () => {
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce')
        
        cy.get('[data-test="title"]').should('have.text', 'Products')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '4');
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Your Cart')
        cy.get('[data-test="checkout"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Your Information')
        cy.get('[data-test="firstName"]').type('ChampsQA');
        cy.get('[data-test="lastName"]').type('Tester');
        cy.get('[data-test="postalCode"]').type('22233345');
        cy.get('[data-test="continue"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview')
        cy.get('[data-test="finish"]').click();
        cy.get('[data-test="secondary-header"]').should('have.text', 'Checkout: Complete!')

    });
});