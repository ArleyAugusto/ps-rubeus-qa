describe('Rubeus - Página Certificação', () => {

  beforeEach(() => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')
  })

  it('Deve carregar a página', () => {
    cy.url().should('include', '/certificacao')
  })

  it('Deve exibir o botão "Quero me certificar"', () => {
    cy.contains('Quero me certificar').should('be.visible')
  })

 it('Deve exibir o modal para preenchimento inscreva-se', () => {
    cy.contains('Nome').should('be.visible')
     cy.contains('Email').should('be.visible')
      cy.contains('Telefone').should('be.visible')
  })

})