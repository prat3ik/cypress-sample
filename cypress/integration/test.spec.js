describe("Test", function(){
    const username = 'prat3ik';

    before(function(){
        cy.fixture('example.json').as('data')
        cy.visit("https://www.demoblaze.com/");

    })

    it("test", function(){
        cy.get('#login2').click();
        cy.get('#logInModal .modal-content').within(($el)=>{
            cy.get('input#loginusername').invoke('val', username).should('have.value', username);
            cy.get('input#loginpassword').invoke('val', '12qw!@QW');
            cy.get('button').contains('Log in').click();
        })

        // Method 1
        cy.get('#nameofuser').should('be.visible').invoke('text').should('match', /`${username}`$/)

        // Method 2
        cy.get('#nameofuser').should('be.visible').invoke('text').then($text=>{
            expect($text).to.match(/prat3ik$/);
        })


    })

    it("Add the product to cart and checkout", function(){

    })

})