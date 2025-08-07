/// <reference types="Cypress"/>

describe('Validar fluxo de login', () => {
    it('Validar login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="title"]').should('contain' , 'Products')
    });

    it('Validar login com e-mail invalido', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_us")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain' , 'Epic sadface: Username and password do not match any user in this service')
        
    });

    it('Realizar login com senha invalida', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sa")
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('contain' , 'Epic sadface: Username and password do not match any user in this service')

    });
});