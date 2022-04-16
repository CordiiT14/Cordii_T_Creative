describe('CordiiTCreative', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/Cordii_T_Creative");
    })

    it("Should be able to click the hamburger to see navigation", () => {
        cy.get('#burgerIcon').click();
        const navigation = cy.get('.navigation');
        navigation.should('be.visible');
    })

    it("Should be able to close navigation", () => {
        cy.get('#burgerIcon').click();
        cy.get('#closeMenu').click();
        cy.get('#navbar').should('contain', '#burgerIcon');
    })

})