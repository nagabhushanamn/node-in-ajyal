

/*

imp-note : All objects that emit events are instances of the EventEmitter class. 

*/

const EventEmitter = require('events').EventEmitter;


//-----------------------------------------------------
// const ee = new EventEmitter();

// ee.on('some-event', () => {
//     console.log("handling 'some-event'")
// })

// setInterval(() => {
//     ee.emit('some-event');
// }, 1000)

//-----------------------------------------------------
// door
//-----------------------------------------------------

class Door extends EventEmitter {
    constructor(number, floor) {
        super();
        this.number = number;
        this.floor = floor;
    }
    open() {
        console.log("door opened...")
        let event = { number: this.number, floor: this.floor }
        this.emit("door-open", event)
    }
    close() {
        console.log("door closed..")
        let event = { number: this.number, floor: this.floor }
        this.emit("door-close", event)
    }
}


const door = new Door(1123, 11);

//------------------------------------------------------
// light
//------------------------------------------------------

const light = {
    setUp() {
        door.on('door-open', (event) => {
            console.log(`LIGHT ON >>>>>  ${event.number} : ${event.floor}`)
        })
        door.on('door-close', (event) => {
            console.log(`LIGHT OFF <<<<< ${event.number} : ${event.floor}`)
        })
    }
}


//------------------------------------------------------
// AC
//------------------------------------------------------

const AC = {
    setUp() {
        door.on('door-open', (event) => {
            console.log(`AC ON >>>>>  ${event.number} : ${event.floor}`)
        })
        door.on('door-close', (event) => {
            console.log(`AC OFF <<<<< ${event.number} : ${event.floor}`)
        })
    }
}

//---------------------------------------------------------------------

light.setUp();
AC.setUp();


setTimeout(() => {
    door.open();
    setTimeout(() => {
        door.close();
    }, 3000)
}, 3000);