describe('Rubeus - Página Site', () => {
  beforeEach(() => {
    cy.visit('https://qualidade.apprbs.com.br/site')
  })

  it('Deve carregar a página', () => {
    cy.url().should('include', '/site')
  })

  it('Deve exibir o botão "Falar com consultor"', () => {
    cy.contains('FALAR COM CONSULTOR').should('be.visible')
  })

   it('Deve exibir o modal para preenchimento newsletter', () => {
    cy.contains('Nome *').should('be.visible')
     cy.contains('Email *').should('be.visible')
      cy.contains('Telefone').should('be.visible')
  })
})


