const cote = require('cote');

const chatResponder = new cote.Responder({
    name: 'Chat Responder',
    respondsTo: ['chatMessage']
});
const publisher = new cote.Publisher({ name: 'arbitration publisher' });

chatResponder.on('chatMessage', (req, cb) => {
    console.log(req);
    cb('OK!');

    publisher.publish('chatMessage', req);
});
