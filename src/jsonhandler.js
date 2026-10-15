const fs = require('fs');

class Picturedata {
    createDefault() {
        /*
        Creates a 'picturedata.json' file with default values if it doesn't exist
        */
        try {
            fs.access('picturedata.json');
        } catch {
            try {
                fs.writeFileSync('picturedata.json', JSON.stringify(calendarData, null, 2), 'utf8');
                console.log("default JSON created");
            } catch (err) {
                console.error('Error writing file:', err);
            }
        }
    }

    readData() {
        /*
        Reads the data from 'picturedata.json' and returns the parsed data.
        */
        try {
            const rawdata = fs.readFileSync('picturedata.json', 'utf8');
            console.log("JSON read.");

            const data = JSON.parse(rawdata);

            return data;
        } catch (err) {
            console.error('Error reading file:', err);
        }
    }

    writeData(index, picturepath) {
        /*
        Writes picture path data to a specific cell (index).
        */
        let data = this.readData();
        // console.log(data);
        data[index].image = picturepath;

        try {
            fs.writeFileSync('picturedata.json', JSON.stringify(data, null, 2), 'utf8');
            console.log("Wrote new data to JSON");
        } catch (err) {
            console.error('Error writing file:', err);
        }
    }

    updateData(updatedData) {
        /*
        Overwrites the 'picturedata.json' with new data.
        */
       try {
            fs.writeFileSync('picturedata.json', JSON.stringify(updatedData, null, 2), 'utf8');
            console.log("Updated JSON with new data");
        } catch (err) {
            console.error('Error writing file:', err);
        }
    }

}

const jsonData = new Picturedata();
jsonData.createDefault();

// console.log(jsonData.readData())
// jsonData.writeData(5, "../Pics/lapaset.png");
// jsonData.updateData([{type: "something"}]);