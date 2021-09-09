# Atem Timecode Overlay

Display your ATEM's current timecode in a websource for easy consumption.

## Description

A barebones [socket.io](https://socket.io), [node.js](https://nodejs.org/en/) and [express](https://expressjs.com/) implementation of atem-connection to poll for the switcher's current timecode and display on a websource to be used in OBS or back into your ATEM switcher.

## Getting Started

### Dependencies

* Requires node.js v12.0.0+
* All other dependencies will be installed via node.

### Installing

clone the repository to your local machine and navigate to the local folder.

Open terminal and run the following:

```
npm install
```

Once you have installed the dependencies open the folder in your choice of text editors / IDEs and open the **index.js** file.

We will be making a few edits here to connect to your switcher.

If you would like to change the server port and polling rate for the ATEM these can be changed using the following variables.

```
POLLING_TIME = 100 
```
Default is 100 as this is a comfortable polling rate for the ATEM to keep up with.

```
PORT_NUMBER = 3000
```
Default is 3000, just the default port usually used by express. You can change this if you are using something like PlayoutBee which uses port 3000, or if you have something else running on that port.

If you would like to change the style of the timecode: such as font, size or color. Open the timecode.html file and change the style for #timecode-wrapper.

Styles can be applied using css or however you see fit for the HTML of the page.

```
#timecode-wrapper {
   font-size: 40px;
   color: #222;
   font-weight: bold;
   font-family: Arial, sans-serif;
}
```

### Executing program

To run the program open terminal again and run the following:

```
npm start
```

Open your browser and navigate to http://localhost:{PORT_NUMBER}

(i.e. https://localhost:3000)


## Authors

[@Justin Wilkin](https://github.com/justinwilkin)

## Version History

* 1.0.0
    * Initial Release

## License

This project is licensed under the [Apache-2.0 License](LICENSE).

Read more at: http://www.apache.org/licenses/LICENSE-2.0)

## Acknowledgments

This is a derivative of the [atem-connection](https://www.nrk.no/) TypeScript library by NRK which is an adaption of [LibAtem](https://github.com/LibAtem/LibAtem).
