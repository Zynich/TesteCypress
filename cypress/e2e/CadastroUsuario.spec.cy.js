describe('Cadastro Usuário', () => {
  it('Passes', () => {
    // Página de cadastro de usuário
    cy.visit('https://magento2-demo.magebit.com/')

    // Ao acessar a página encontrar e acessar o link para cadastro
    cy.contains('Create an Account').click()

    cy.url().should('include', '/customer/account/create/')

    // Preencheendo o formulário de cadastro
    cy.get('input[name="firstname"]').type('Teste')
    cy.get('input[name="lastname"]').type('testador')
    cy.get('input[id="email_address"]').type('teste@gmail.com')
    cy.get('input[name="password"]').type('EKI5R6GFIc')
    cy.get('input[name="password_confirmation"]').type('EKI5R6GFIc')

    // Envio do formulário
    cy.get('form button.action.submit.primary').click()


  })
})