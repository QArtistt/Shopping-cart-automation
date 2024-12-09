beforeEach(() => {
  cy.visit('https://react-shopping-cart-project.netlify.app/')
})

describe('shopping cart tests', () => {
  it('add item to cart', () => {
    cy.contains('.product_card', 'Hero GoPro 10').find('.btn', 'Add to Cart').click()
    cy.get('.cart_icon > img').click()
    cy.get('.cart_content').should('contain', 'Hero GoPro 10')
  })

  it('remove item from cart', () => {
    cy.contains('.product_card', 'Hero GoPro 10').find('.btn', 'Add to Cart').click()
    cy.pause(2000)
    cy.get('.cart_icon > img').click()
    cy.wait(2000)
    cy.get('.cart_items_delete > span').click()
    cy.get('.cart_content').should('not.contain', 'Hero GoPro 10')
  })
})