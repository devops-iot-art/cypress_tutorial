import { registerPage } from "../../pages/registerPage"
const registerObj = new registerPage()
import registerData from "../../fixtures/registerData.json"

describe('test automation', () => {

    it('register flow', () => {
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstname)
        registerObj.enterLastName(registerData.lastname)
        registerObj.enterEmail(registerData.email)
        registerObj.enterPhone(registerData.phone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickonContinue()

    })
})