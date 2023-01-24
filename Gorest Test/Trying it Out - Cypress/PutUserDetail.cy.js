describe('Final Project Question 4 - Trying It Out',() => {

    it("Update the users details", () => { // trying to update the detail list of user 331
        var Newuser = { // new detail list of user 331
            'name' : 'samuel',
            'email': 'samuel@rocketmail.com',
            'status' : 'active'
        }
        cy.request({
            method: 'PUT', // using PUT method to udpate the detail list
            url: 'https://gorest.co.in/public/v2/users/331', // webiste for detail list of user 331
            headers: {
            authorization: 'Bearer a98f041754cdb6c8a98151bd127e7ddc3cd821d490295b7a66908c1b58620e97' // token for authorization 
            },
            failOnStatusCode : false,
            body : Newuser
            }).then((response) => {
                expect(response.body.name).equal(Newuser.name) // assertion the name if the test is correct
                expect(response.body.email).equal(Newuser.email) // assertion the nemail if the test is correct

            })
        })
    })