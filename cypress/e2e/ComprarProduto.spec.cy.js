describe('login Usuário', () => {

  const produto ='Radiant Tee'
  
  it('Comprar produto', () => {
    // Página de cadastro de usuário
    cy.visit('https://magento2-demo.magebit.com/')   
    cy.get('[id=search]').type(produto).type('{enter}')

    cy.contains(produto)

    cy.get('#product-item-info_1564').click()

    cy.get('#option-label-size-157-item-172').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#product-addtocart-button').click()

    cy.wait(5000)
    
    // Aguarde até que o modal do carrinho esteja visível (você pode ajustar o seletor conforme necessário)
    cy.get('.action.showcart').click().should('be.visible').get('#top-cart-btn-checkout').click() // Substitua '.modal-carrinho' pelo seletor correto

    cy.wait(5000)

    cy.contains('Shipping Address').should('be.visible');

    // Preencheendo o formulário de cadastrocustomer-email
    cy.get('#customer-email').type('seu-email@exemplo.com')
    cy.get('input[name="firstname"]').type('Test Name')
    cy.get('input[name="lastname"]').type('Test LastName')
    cy.get('input[name="street[0]"]').type('Rua xxx')
    cy.get('select').eq(0).select('US')
    cy.get('select').eq(1).select('2')

    cy.get('input[name="city"]').type('test City')
    cy.get('input[name="postcode"]').type('12345-6789')
    cy.get('input[name="telephone"]').type('54845155484')
    cy.get('input[name="ko_unique_1"]').check();
    cy.get('.button.action.continue.primary').click();

    cy.wait(5000)

    cy.contains('Payment Method').should('be.visible');

    cy.get('.action.primary.checkout').click();

  })

})