const { $ } = require('@wdio/globals')
const Page = require('./page');

async function login (username, password) {
    let weatherSelector = '#weather'
    let buttonMoisturizer = '.btn btn-primary'
    let buttonSunscreen = 'button[type="submit"]'
    
        // async login (weather, buttonMoisturizer, buttonSunscreen) {
            await inputUsername.setValue(username);
            await inputPassword.setValue(password);
            await btnSubmit.click();
}
        module.exports = new LoginPage()
    

// defining selectors
// let usernameSelector = '#username'
// let passwordSelector = '#password'

//             await usernameSelector.setValue("nadia@emumba.com")
//             await passwordSelector.setValue("password");
//             await btnSubmit.click();
//         }

// module.exports = new LoginPage()






//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// module.exports = new LoginPage();
