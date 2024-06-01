// Second way of creating an object:
//      Factory Function
function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    }
}
const circle1 = createCircle(2);
const circle2 = createCircle(4);
const circle3 = createCircle(5);
circle1.draw();
console.log(`The radius of the first circle is: ${circle1.radius}`)
console.log(`The radius of the second circle is: ${circle2.radius}`)
console.log(`The radius of the third circle is: ${circle3.radius}`)
