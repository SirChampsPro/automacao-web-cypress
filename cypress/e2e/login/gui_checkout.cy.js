/// <reference types="Cypress"/>
import Checkout from "../../support/pages/Checkout";
import LoginPage from "../../support/pages/LoginPage";
import Products from "../../support/pages/Products";
describe('Validar fluxo checkout', () => {
    it('Realizar login, adicionar produtos ao carrinho e concluir compra', () => {
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce');
        LoginPage.clicarLogin();
        Products.verificadorPagina('Products');

        cy.screenshot();
        
        Products.adicionarProdutosCarrinho('[data-test="add-to-cart-sauce-labs-backpack"]');
        Products.adicionarProdutosCarrinho('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        Products.adicionarProdutosCarrinho('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        Products.adicionarProdutosCarrinho('[data-test="add-to-cart-sauce-labs-onesie"]');

        Products.verificaQtdItensCarrinho('4');

        cy.screenshot();

        Products.removerProdutosCarrinho('[data-test="remove-sauce-labs-fleece-jacket"]');

        Products.verificaQtdItensCarrinho('3');

        cy.screenshot();

        cy.get('[data-test="shopping-cart-link"]').click();
        Products.verificadorPagina('Your Cart');

        cy.screenshot();

        Products.removerProdutosCarrinho('[data-test="remove-sauce-labs-bolt-t-shirt"]');
        Products.verificaQtdItensCarrinho('2');

        cy.screenshot();

        cy.get('[data-test="checkout"]').click();
        Products.verificadorPagina('Checkout: Your Information');

        cy.screenshot();

        Checkout.preencherFormulario('ChampsQA', 'Tester', '22233345');
        
        cy.screenshot();

        Checkout.clicarConfirmacao();

        Products.verificadorPagina('Checkout: Overview');

        cy.screenshot();

        cy.get('[data-test="finish"]').click();

        Products.verificadorCompra('Checkout: Complete!');

        cy.screenshot();

    });
    
});