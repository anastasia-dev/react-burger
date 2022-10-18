describe("Check order creation and ingredients drag and drop functionality.", () => {
    before(() => {

        cy.visit('http://localhost:3000');
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.reload()
    })

    it("check constructor is empty", () => {
        cy.get('[class^=BurgerConstructor_editableItem]').should("not.exist");
        cy.get('[class^=constructor-element]').should("not.exist");
    });

    it("add bunds to constructor", () => {
        cy.contains('булка').trigger('dragstart');
        
        cy.get('[class^=BurgerConstructor_mainSection]').trigger('drop');

        //buns exists
        cy.get('[class$=constructor-element_pos_top]').should('exist');
        cy.get('[class$=constructor-element_pos_bottom]').should('exist');
        //no ingredients
        cy.get('[class^=BurgerConstructor_editableItem]').should("not.exist");
    })

    it("add ingredients to constructor", () => {
        cy.contains('Кристаллы').trigger('dragstart');

        cy.get('[class^=BurgerConstructor_mainSection]').trigger('drop');

        cy.get('[class^=BurgerConstructor_editableItem]').should("exist");
    })

    it("click to order", () => {
        cy.contains('Оформить заказ').click();

        cy.url().should('eq', 'http://localhost:3000/login');

        cy.get('input[name="email"]').type('cycycytest@mail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('[class^=button_button]').click();
        
        
        cy.url().should('eq', 'http://localhost:3000/');
        cy.contains('Оформить заказ').click();
        cy.get('[class^=Modal_modalPopup]').contains('Заказ отправлен');
        cy.wait(25000);
        cy.get('[class^=Modal_modalPopup]').contains('Ваш заказ начали готовить');
        cy.get("[class^=Modal_modalPopup]").find("svg").first().click();
    })

    it("check constructor is empty", () => {
        cy.get('[class^=BurgerConstructor_editableItem]').should("not.exist");
        cy.get('[class^=constructor-element]').should("not.exist");
    });
})