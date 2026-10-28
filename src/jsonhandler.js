const fs = require('fs');

function writeJSONData(data, filepath) {
    try {
        fs.writeFileSync(filepath, JSON.stringify(data, null, 2), 'utf8');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

function readJSONData(filepath) {
    try {
        const rawdata = fs.readFileSync(filepath, 'utf8');
        console.log("JSON read.");

        const data = JSON.parse(rawdata);

        return data;
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

class Picturedata {
    createDefault() {
        /*
        Creates a 'picturedata.json' file with default values if it doesn't exist
        */
        try {
            fs.access('picturedata.json');
        } catch {
            writeJSONData(calendars, 'picturedata.json');
        }
    }

    readData() {
        /*
        Reads the data from 'picturedata.json' and returns the parsed data (list of calendar objects).
        */
        return readJSONData('picturedata.json')
    }

    updateData(updatedData) {
        /*
        Overwrites the 'picturedata.json' with new data.
        */
        writeJSONData(updatedData, 'picturedata.json');
    }

}

const jsonData = new Picturedata();
jsonData.createDefault();

class Profiledata {
    createDefault() {
        /*
        Creates a 'profile.json' file with default values if it doesn't exist
        */
        try {
            fs.access('profile.json');
        } catch {
            const defaultprofile = {
                    passcode: 1234,
                    lastOpenedJSON: 'picturedata.json'
            }
            writeJSONData(defaultprofile, 'profile.json');
        }
    }

    readData() {
        /*
        Reads the data from 'profile.json' and returns the parsed data (profile object).
        */
        return readJSONData('profile.json')
    }

    updateData(updatedData) {
         /*
        Overwrites the 'profile.json' with new data.
        */
        writeJSONData(updatedData, 'profile.json');
    }
}

const profileData = new Profiledata();
profileData.createDefault();