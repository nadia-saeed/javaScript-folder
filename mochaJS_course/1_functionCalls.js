// Test Suite - Mathematical Operations

// Test Cases:

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division
// describe('Description of the Test Suite', function()
var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
   
    it('Addition of two numbers', function(){
        var a = 10
        var b = 10

        var c = a+b

        assert.equal(c,220)

    });

    it('Subtraction of two numbers', function(){
        var a = 10
        var b = 10

        var c = a-b

        assert.equal(c,0)
    });

    it('Multiplication of two numbers', function(){
        var a = 10
        var b = 10

        var c = a*b

        assert.equal(c,100)
    });

    it('Division of two numbers', function(){
        var a = 10
        var b = 10

        var c = a/b

        assert.equal(c,1)
    });
});