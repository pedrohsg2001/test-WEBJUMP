class webjumpPage{
    
    //accessing the site and checking if the page has loaded
    access() {
        cy.visit('/')
        cy.get('div.jumbotron img.center-block.img-responsive').should('be.visible')
    }

    //clicking the one, two and four buttons
    clickButtons() {
        cy.get('div#panel_body_one button#btn_one').click()
        cy.get('div#panel_body_one button#btn_two').click()
        cy.get('div#panel_body_one button#btn_link').click()
    }

    //checking that buttons are not visible after clicking
    checkButtonsNotVisble() {
        cy.get('div#panel_body_one button#btn_one').should('be.not.visible')
        cy.get('div#panel_body_one button#btn_two').should('be.not.visible')
        cy.get('div#panel_body_one button#btn_link').should('be.not.visible')
    }

    //clicking the one, two and four buttons that are inside an iFrame
    clickIframeButtons () {
        cy.iframe('iframe[src="buttons.html"]')
        .find('div.col-sm-12 button#btn_one')
        .click()
        cy.iframe('iframe[src="buttons.html"]')
        .find('div.col-sm-12 button#btn_two')
        .click()
        cy.iframe('iframe[src="buttons.html"]')
        .find('div.col-sm-12 button#btn_link')
        .click()
    }

    //checking that buttons are not visible after clicking
    checkIframeButtonsNotVisble() {
        cy.iframe('iframe[src="buttons.html"]')
        .find('div.col-sm-12 button#btn_one')
        .should('be.not.visible')
        cy.iframe('iframe[src="buttons.html"]')
        .find('div.col-sm-12 button#btn_two')
        .should('be.not.visible')
        cy.iframe('iframe[src="buttons.html"]')
        .find('div.col-sm-12 button#btn_link')
        .should('be.not.visible')
    }

    //clicking to reset iframe button clicks
    resetIframe() {
        cy.iframe('iframe[src="buttons.html"]')
        .find('div.col-sm-12 #reset_buttons')
        .click()
    }

    //filling in your first name field inside the iframe
    fillYourFirstNameIframe() {
        cy.iframe('iframe[src="fields.html"]')
        .find('div.col-sm-12 input#first_name')
        .type('Pedro Henrique')
    }

    //clicking only the one button that are inside the iframe
    clickIframeOneButton() {
        cy.iframe('iframe[src="buttons.html"]')
        .find('div.col-sm-12 button#btn_one')
        .click()
    }

    //checking if option 3 exists inside the iframe
    checkIframeOptionThree() {
        cy.iframe('iframe[src="buttons.html"]')
        .find('div.col-sm-12 #opt_three')
        .should('be.visible')
    }

    //selecting option two inside the iframe
    selectIframeOptionTwo() {
        cy.iframe('iframe[src="buttons.html"]')
        .find('div.col-sm-12 #opt_two')
        .click()
    }

    //checking if the selenium logo image is visible
    checkImgSeleniumBeVisible() {
        cy.get('img[alt="selenium"]')
        .should('be.visible')
    }
}
export default new webjumpPage;