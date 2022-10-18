describe("Check order creation and ingredients drag and drop functionality.", () => {
    before(() => {
        cy.visit('/');
    })

    const editableItemSelector = '[class^=BurgerConstructor_editableItem]';
    const bunItemSelector = '[class^=constructor-element]';

    it("check constructor is empty", () => {
        cy.get(editableItemSelector).should("not.exist");
        cy.get(bunItemSelector).should("not.exist");
    });

    const constructorMainSectionSelector = '[class^=BurgerConstructor_mainSection]';

    it("add buns to constructor", () => {
        cy.contains('булка').trigger('dragstart');
        cy.get(constructorMainSectionSelector).trigger('drop');
        //buns exists
        cy.get('[class$=constructor-element_pos_top]').should('exist');
        cy.get('[class$=constructor-element_pos_bottom]').should('exist');
        //no ingredients
        cy.get(editableItemSelector).should("not.exist");
    })

    it("add ingredients to constructor", () => {
        cy.contains('Кристаллы').trigger('dragstart');
        cy.get(constructorMainSectionSelector).trigger('drop');
        cy.get(editableItemSelector).should("exist");
    })
    
    it("click to order", () => {
        const baseUrl = Cypress.config('baseUrl');
        const makeOrderText = 'Оформить заказ';
        cy.contains(makeOrderText).click();
        cy.url().should('eq', `${baseUrl}/login`);
        cy.get('input[name="email"]').type('cycycytest@mail.com');
        cy.get('input[name="password"]').type('1234567');
        cy.get('[class^=button_button]').click();
        
        cy.url().should('eq', `${baseUrl}/`);
        cy.contains(makeOrderText).click();

        const modalPopupSelector = '[class^=Modal_modalPopup]';
        cy.get(modalPopupSelector).contains('Заказ отправлен');
        cy.wait(25000);
        cy.get(modalPopupSelector).contains('Ваш заказ начали готовить');
        cy.get(modalPopupSelector).find("svg").first().click();
    })

    it("check constructor is empty", () => {
        cy.get(editableItemSelector).should("not.exist");
        cy.get(bunItemSelector).should("not.exist");
    });
})