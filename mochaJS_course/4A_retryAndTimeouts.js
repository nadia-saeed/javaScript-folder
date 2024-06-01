// 1- Suite Level Timeout:

var assert = require('assert');

describe('Mathematical Operations - Test Suite', function(){
    this.timeout(500);

    var a = 10
    var b = 10
    it('Addition of two numbers', function(done){
        
        setTimeout(done,3000);
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

    it('Division of two numbers', function(){

        var c = a/b

        assert.equal(c,1)
    });
});