describe("Test", function () {
    const username = 'prat3ik';

    before(function () {
        cy.fixture('example.json').as('data')
        cy.visit("https://www.demoblaze.com/");
    })

    it.skip("Login", function () {
        cy.get('#login2').click();
        cy.get('#logInModal .modal-content').within(($el) => {
            cy.get('input#loginusername').invoke('val', username).should('have.value', username);
            cy.get('input#loginpassword').invoke('val', '12qw!@QW');
            cy.get('button').contains('Log in').click();
        })

        // Method 1
        cy.get('#nameofuser').should('be.visible').invoke('text').should('match', new RegExp(`${username}$`, 'g'))

        // Method 2
        cy.get('#nameofuser').should('be.visible').invoke('text').then($text => {
            expect($text).to.match(/prat3ik$/);
        })
    })

    it("Add the product to cart and checkout", function () {
        cy.task('log', Cypress.env('TEST_ENV'));
        cy.task('log', this.data.product_name);
        cy.get('a[href*=".html?idp"]').contains(this.data.product_name).click();
        cy.get('.name').should('have.text', this.data.product_name);
        cy.get('.price-container').should('contain.text', this.data.product_price);
    })

})