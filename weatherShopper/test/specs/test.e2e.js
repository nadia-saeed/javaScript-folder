const { expect } = require('@wdio/globals')
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')

describe('My Weather application', () => {
    it('should click the correct item acc. to the temperature', async () => {
        // Open browser
        browser.url(`https://weathershopper.pythonanywhere.com/`)
        
        // Page elements
        let weatherSelector = $('#weather')
        let temperatureText = await weatherSelector.getText();
        let temperatureValue = parseFloat(temperatureText);
        let moisturizerSelector = $('a[href*="moisturizers"]')
        let sunscreenSelector = $('a[href*="sunscreen"]')
        let temp = 0
        //actions
        console.log('aabbba',temperatureText)
        
            if (temperatureValue < 19){
                console.log('aaa',temperatureValue)
                // moisturizerSelector.click()
                // waitforTimeout( 10000)
            }
            else if(temperatureValue > 34){
                console.log('bbb',temperatureValue)
                // sunscreenSelector.click()
                // temp = weatherSelector
            }

        // await passwordSelector.setValue("password");
        // await btnSubmit.click();
     })})


// Assuming the temperature is displayed as text within a <span> element with id 'temperature'
// const temperatureElement = $('#temperature');
// const temperatureText = temperatureElement.getText(); // Get the text content of the element
// const temperatureValue = parseFloat(temperatureText); // Convert the text to a floating-point number

// if (temperatureValue > 30) {
//     console.log('Temperature is greater than 30 Celsius.');
// } else {
//     console.log('Temperature is 30 Celsius or lower.');
// }

const wert= () =>{

}

