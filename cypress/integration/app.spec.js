describe('App', ()=>{

    beforeEach(()=>{
        cy.visit("http://localhost:3000/Cordii_T_Creative");
    })

    it("Visits the page", () => {
        cy.visit('http://localhost:3000/Cordii_T_Creative');
    })

})