const { $ } = require('@wdio/globals')
const Page = require('./page');
async function login (username, password) {
// defining selectors
let usernameSelector = '#username'
let passwordSelector = '#password'

            await usernameSelector.setValue("nadia@emumba.com")
            await passwordSelector.setValue("password");
            await btnSubmit.click();
        }

module.exports = new LoginPage()



/**
 * sub page containing specific selectors and methods for a specific page
 */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get inputUsername () {
//         return $('#username');
//     }

//     get inputPassword () {
//         return $('#password');
//     }

//     get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }
