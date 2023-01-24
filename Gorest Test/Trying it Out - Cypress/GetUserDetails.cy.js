describe('Final Project Question 4 - Trying It Out',() => {

    it("Verify the users list will display", () => { // get the detail list of the user from the user 331
        cy.request({
            method: 'GET', // using get method to get the detail list
            url: 'https://gorest.co.in/public/v2/users/331' // website to check the user detail list of user 331
        }).as('users')
        cy.get('@users').its('body.id').should('equal',331) // assertion the id if it is correct
        cy.get('@users').its('body.name').should('equal','Sloka Menon') // assertion the name if it is correct
        cy.get('@users').its('body.email').should('equal','menon_sloka@torp.net') // assertion the email if it is correct
    }) 
})