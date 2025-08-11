/// <reference types="Cypress"/>
import Checkout from "../../support/pages/Checkout";
import LoginPage from "../../support/pages/LoginPage";
import Products from "../../support/pages/Products";
describe('Validar fluxo checkout', () => {
    it('Realizar login, adicionar produtos ao carrinho e concluir compra', () => {
        LoginPage.visit();
        LoginPage.login('standard_user', 'secret_sauce');
        Products.verificadorPagina('Products');
        
        Products.adicionarProdutosCarrinho('[data-test="add-to-cart-sauce-labs-backpack"]');
        Products.adicionarProdutosCarrinho('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');
        Products.adicionarProdutosCarrinho('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        Products.adicionarProdutosCarrinho('[data-test="add-to-cart-sauce-labs-onesie"]');

        Products.verificaQtdItensCarrinho('4');

        Products.removerProdutosCarrinho('[data-test="remove-sauce-labs-fleece-jacket"]');

        Products.verificaQtdItensCarrinho('3');

        cy.get('[data-test="shopping-cart-link"]').click();
        Products.verificadorPagina('Your Cart');

        Products.removerProdutosCarrinho('[data-test="remove-sauce-labs-bolt-t-shirt"]');
        Products.verificaQtdItensCarrinho('2');

        cy.get('[data-test="checkout"]').click();

        Products.verificadorPagina('Checkout: Your Information');

        Checkout.preencherFormulario('ChampsQA', 'Tester', '22233345');

        Products.verificadorPagina('Checkout: Overview');
        cy.get('[data-test="finish"]').click();

        Products.verificadorCompra('Checkout: Complete!');

    });
    
});