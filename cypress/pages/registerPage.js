export class registerPage {

    weblocators = {
        firstname:'#input-firstname',
        lastname:'#input-lastname',
        email:'#input-email',
        phone:'#input-telephone',
        password:'#input-password',
        passwordConfirm:'#input-confirm',
        confirmPolicy:'input[type="checkbox"]',
        continue:'.btn.btn-primary'

    }

    enterFirstName(FName){
        cy.get(this.weblocators.firstname).type(FName)
    }

    enterLastName(LName){
        cy.get(this.weblocators.lastname).type(LName)
    }

    enterEmail(Email){
        cy.get(this.weblocators.email).type(Email)
    }

    enterPhone(Phone){
        cy.get(this.weblocators.phone).type(Phone)
    }

    enterPassword(Password){
        cy.get(this.weblocators.password).type(Password)
        cy.get(this.weblocators.passwordConfirm).type(Password)
    }

    selectCheckbox(){
        cy.get(this.weblocators.confirmPolicy).check()
    }

    clickonContinue(){
        cy.get(this.weblocators.continue).click()
    }

    openURL() {
        cy.visit(Cypress.env('URL'))
    }





}