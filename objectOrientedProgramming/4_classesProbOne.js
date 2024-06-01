// Create a class called 'Rectangle', and calculate its area and preimeter.

class Rectangle{
    constructor(length,width){
        this.length = length;
        this.width = width;
    }
    calculateArea(){
        return (`${this.length * this.width}cm`);
    }

    calculatePerimeter(){
        return (`${2*(this.length + this.width)}cm`)
    }
}  
    let rectangle1 = new Rectangle(10, 5);
console.log('Area:', rectangle1.calculateArea());
console.log('Perimeter:', rectangle1.calculatePerimeter());