// Third way of creating an object:
//      Constructor Function

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle1 = new Circle(2);
console.log(circle1.radius)
circle1.draw()