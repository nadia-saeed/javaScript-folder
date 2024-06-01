// First (simple) way of creating an object:
//      Object Literal
const circle = {
    radius: 9,
    diameter: function(){
        console.log(2*this.radius)
    },
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};
circle.draw()
console.log(circle.location)
console.log(circle.radius)
circle.diameter()