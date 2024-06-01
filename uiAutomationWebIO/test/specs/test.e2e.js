const { expect } = require('@wdio/globals')
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        //open browser
        browser.url(`https://the-internet.herokuapp.com/login`)

        //page elements
        let usernameSelector = $('#username')
        let passwordSelector = $('#password')
        let btnSubmit= $('button[type="submit"]')

        //actions
        await usernameSelector.setValue("nadia@emumba.com")
        await passwordSelector.setValue("password");
        await btnSubmit.click();

        //assertions



        // await LoginPage.open()
        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')
        // await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
})

