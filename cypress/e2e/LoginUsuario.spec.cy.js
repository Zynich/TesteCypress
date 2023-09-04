describe('login Usuário', () => {
  it('Passes', () => {
    // Página de cadastro de usuário
    cy.visit('https://magento2-demo.magebit.com/')

    // Ao acessar a página encontrar e acessar o link para login
    cy.contains('Sign In').click()

    // Preencha o formulário de registro
    cy.get('input[name="login[username]"]').type('teste@gmail.com')
    cy.get('input[name="login[password]"]').type('EKI5R6GFIc')

    // Envio do formulário
    cy.get('.action.login.primary').click();

  })
})