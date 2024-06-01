// function status(feature){
let feature = 'sleep';
switch(feature){
case 'feed':
    console.log('Pet is happy.');
    break;
case 'play':
    console.log('Pet is energetic.');
    break;
case 'sleep':
    console.log('Pet is rested and healthy.');
    break;
case 'walk' :
    console.log('Pet is too tired to walk.');
    break;
default:
    console.log(`${feature} is not a status of the pet.`);
}
// }