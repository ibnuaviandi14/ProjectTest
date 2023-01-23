///<reference types = 'cypress' /> 

describe("Zero Bank Test",() =>{
    beforeEach(() =>{
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('NavBar Test - Home',() => {
        cy.get('#homeMenu > div > strong').should('be.visible').should('contain','Home').click() // Assertion of Home button
        cy.get('.active > .custom > h4').should('contain','Online Banking') // Assertion of Home button
})

    it('NavBar Test - Online Banking',() => {
        cy.get('#onlineBankingMenu > div > strong').should('be.visible').should('contain','Online Banking').click() // Assertion of Online Banking button
        cy.get('h1').should('contain','Online Banking') // Assertion of Online Banking button
        cy.get('.span6 > p').should('contain','Pay bills easily') // Assertion of Online Banking button
})

    it('NavBar Test - Feedback',() => {
        cy.get('#feedback > div > strong').should('be.visible').should('contain','Feedback').click() // Assertion of Feedback button
        cy.get('#feedback-title').should('contain','Feedback') // Assertion of Feedback button
        cy.get('.offset3 > :nth-child(3)').should('contain','This feedback facility is not secure. Please do not send any') // Assertion of Online Banking button    
})

    it('Search Box Test',()=>{
        cy.get('input[name="searchTerm"]').type('Credit {enter}') // Trying to find Credit in the search bar
        cy.get('li > a').should('contain',' Credit Cards') // Assertion the search bar if the result is correct
        cy.url().should('contain',"Credit") // Assertion the url if it is contain the search word
})

    it('Login & Logout Test',() => {
        cy.get('#signin_button').click() // Click the signin button
        cy.get('h3').should('contain','Log in to ZeroBank') // Assertion the header if the web correctly directed
        cy.fixture("ProjectTest").then(user =>{
            const InUser = user.username2 //Incorrect Username
            const InPass = user.password2 // Incorrect Password
        cy.get('#user_login').type(InUser) // type the incorrect username
        cy.get('#user_password').type(InPass) // type the incorrect password
        cy.get('.btn').click() // click Sign In Button
        cy.get('.alert').should('contain','Login and/or password are wrong.') // Assertion the alert message if username / password are wrong
        
        // Trying to log in with correct Username & Password        
        cy.fixture("ProjectTest").then(user =>{
            const User = user.username1 //correct Username
            const Pass = user.password1 // correct Password
        cy.get('#user_login').type(User) // type the correct username
        cy.get('#user_password').type(Pass) // type the correct password
        cy.get('.btn').click() // click Sign In Button
        cy.get('.offset2 > :nth-child(1)').should('contain','Cash Accounts') // Assertion the body if the web correctly directed
        cy.get('.offset2 > :nth-child(3)').should('contain','Investment Accounts') // Assertion the body if the web correctly directed
        cy.get('.offset2 > :nth-child(5)').should('contain','Credit Accounts') // Assertion the body if the web correctly directed
        cy.url().should('contain','account-summary.html') // Assertion the url if the web correctly directed

        // Trying to log out 
        cy.get(':nth-child(3) > .dropdown-toggle').click() // Click Username button
        cy.get('#logout_link').click() // Click Logout button
        cy.get('.brand').should('contain','Zero Bank') // Assertion the body if the web correctly return to the homepage
        cy.url().should('contain','index') // Assertion the url if the web correctly return to the homepage

})
})
})
})