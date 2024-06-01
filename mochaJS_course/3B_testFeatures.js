// 2- Inclusive Tests (use of .skip):

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
    var a = 10
    var b = 10
    it.skip('Addition of two numbers', function(){
        
        var c = a+b

        assert.equal(c,20)

    });

    it.skip('Subtraction of two numbers', function(){
        
        var c = a-b

        assert.equal(c,0)
    });

    it('Multiplication of two numbers', function(){

        var c = a*b

        assert.equal(c,100)
    });

    it('Division of two numbers', function(){

        var c = a/b

        assert.equal(c,1)
    });
});