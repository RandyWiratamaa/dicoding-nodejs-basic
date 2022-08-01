const {EventEmitter} = require('events');
const myEventEmitter = new EventEmitter();

const birthdayEventListener = ({name}) => {
    console.log(`Happy Birthday ${name}!`);
}

myEventEmitter.on('birthday', birthdayEventListener);

myEventEmitter.emit('birthday', {name: 'Randy'});