// 1- Exclusive Tests (use of .only):

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
    var a = 10
    var b = 10
    it.only('Addition of two numbers', function(){
        
        var c = a+b

        assert.equal(c,20)

    });

    it('Subtraction of two numbers', function(){
        
        var c = a-b

        assert.equal(c,0)
    });

    it('Multiplication of two numbers', function(){

        var c = a*b

        assert.equal(c,100)
    });

    it.only('Division of two numbers', function(){

        var c = a/b

        assert.equal(c,1)
    });
});