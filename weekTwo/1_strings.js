
const message = ' This is my first statement.';
    console.log(typeof message); // string
    console.log(message.length); // 28
    console.log(message[9]);
    // or: console.log(message.charAt(9));
    console.log(message.includes('my')); // true
    console.log(message.startsWith('That')); // false (instead 'This')
    console.log(message.endsWith('t')); // false
    console.log(message.endsWith('.')); // true
    console.log(message.indexOf('my')); // 9
    console.log(message.replace('my', 'your')); // This is your first statement.
    console.log(message.toUpperCase()); // THIS IS MY FIRST STATEMENT.
    console.log(message.toLowerCase()); // this is my first statement.
    console.log(message.trim());
    console.log(message.trimLeft());
    console.log(message.trimRight());

const another = new String('hi');
    console.log(typeof another); // object