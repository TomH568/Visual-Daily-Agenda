const {app, BrowserWindow} = require("electron");

console.log("Test: Hello Team! ")

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height:600

    });

    win.loadFile("index.html"); /* ENTRY POINT*/
}


app.whenReady().then(createWindow);
