describe('Final Project Question 4 - Trying It Out',() => {

    it('Adding New User Details',() =>{ // trying to add new user detail
        
        var users = { // detail of new user list
            "name": "ardi",
            "email": "ardi@yahoo.com",
            "gender": "male",
            "status": "active"
            }
        cy.request({
            method: 'POST', // add new user list by using post method
            url: 'https://gorest.co.in/public/v2/users', // website that want to be tested 
            headers: {
            authorization: 'Bearer a98f041754cdb6c8a98151bd127e7ddc3cd821d490295b7a66908c1b58620e97' // token to authorized the website
            },
            failOnStatusCode : false,
            body : users
            }).then((response) => {
            expect(response.body.email).equal(users.email) // assertion the email if the test is correct
        })

})
})

