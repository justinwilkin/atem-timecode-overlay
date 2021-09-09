const { Atem, Commands } = require('atem-connection');
const myAtem = new Atem();
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Variables

const POLLING_TIME = 100, // ms to poll for timecode
      PORT_NUMBER = 3000; // port number of server

// Expose our routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/timecode.html');
});

// Open our server at localhost:3000
server.listen(PORT_NUMBER, () => {
  console.log(`listening on *:${PORT_NUMBER}`);

  // Setup our ATEM event listeners
  setupAtemListeners();
  
  // Connect to our ATEM
  myAtem.connect('192.168.0.146');
});

// Setup our ATEM
function setupAtemListeners() {
    // Swallow errors otherwise node.js spits these as unhandled promises (yuck)
    myAtem.on('error', console.error);

    // Listen for atem connection
    myAtem.on('connected', () => {
        console.log('Connected to atem...');

        // Start our polling loop
        getTimecode();
    });
}

function getTimecode() {

    myAtem.requestTime().then(() => {
        // Get our updated timecode from the atem state
        var lastTimeCode = myAtem.state.info.lastTime;

        // Do whatever you want here with the timecode, but we will display it
        io.emit('timecode', lastTimeCode);
    });

    // Recursively call with timeout so we dont overload the switcher.
    // Try not to use < 10ms polling time.
    setTimeout(getTimecode, POLLING_TIME);
}