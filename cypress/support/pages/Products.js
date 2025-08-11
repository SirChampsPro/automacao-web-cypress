class Products {

    adicionarProdutosCarrinho(produtoAdd) {
        cy.get(produtoAdd).click();
    }

    removerProdutosCarrinho(produtoRmv) {
        cy.get(produtoRmv).click();
    }

    verificadorPagina(text) {
        cy.get('[data-test="title"]').should('have.text', text)
    }

    verificaQtdItensCarrinho(quantidade) {
        cy.get('[data-test="shopping-cart-link"]').should('have.text', quantidade);
    }

    verificadorCompra(text) {
        cy.get('[data-test="secondary-header"]').should('have.text', text)
    }

}

export default new Products();