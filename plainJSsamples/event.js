const Event = require('events');

const event = new Event();

const EventType = {
    MessagePushed: 'MessagePushed'
};

event.on(EventType.MessagePushed, (to, message) => console.log("Message received ", message));

const sendMessage = (to, msg) => {
    console.log('send Mesasge To ', to, msg);
    event.emit(EventType.MessagePushed, to, msg);
}


sendMessage('Steve', "Hello steve")