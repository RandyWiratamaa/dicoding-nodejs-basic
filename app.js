// const message = (name) => {
//     console.log(`Hello ${name}`);
// }
// message('Randy')
const coffee = require('./coffee');
const {firstName, lastName} = require('./user');
const {EventEmitter} = require('events');
const myEventEmitter = new EventEmitter();

//function makeCoffee
const makeCoffee = ({name}) => {
    console.log(`Kopi ${name} telah dibuat`);
};

const makeBill = ({bill}) => {
    console.log(`Bill sebesar ${bill} telah dibuat`);
}

// Jika terjadi event coffe-order, maka function makeCoffee aka dijalankan
myEventEmitter.on('coffee-order', makeCoffee);
myEventEmitter.on('coffee-order', makeBill);

// Memicu event coffee-order terjadi
myEventEmitter.emit('coffee-order', { name: 'Tubruk', bill: 15000 });
// console.log(firstName);
// console.log(lastName);