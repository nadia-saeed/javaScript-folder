describe('Mocha Hooks', function(){

    before('Execute Before All Tests', function(){
        console.log('Execute Before All Tests');
    });

    beforeEach('Execute Before Each Test', function(){
        console.log('Execute Before Each Test');
    });

    after('Execute After All Tests', function(){
        console.log('Execute After All Tests');
    });

    afterEach('Execute after Each Test', function(){
        console.log('Execute After Each Tests');
    });
    
    it('Mocha Hooks Test', function(){
        console.log('Mocha - This is a Test for Mocha Hooks');
    })
})