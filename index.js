require("dotenv").config();

const tmi = require('tmi.js');

const options = {
    options:{
        debug: true,

    },
    connection:{
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: process.env.NAME_BOT,
        password: process.env.PASSWORD_BOT,
       

    },
    channels: [
        process.env.CHANNEL_NAME
    ],
};


const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    client.action("apoloq", "RodrigoBot Working!");
});

client.on('chat', (channel, user, message, self) => {
    client.action("apoloq", `Hello ${user['display-name']}`);
});