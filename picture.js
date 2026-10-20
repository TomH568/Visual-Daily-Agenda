const fs = require('fs');
const path = require('path');

class Picture {

    /**
     * Searches for all PNG files in the current directory that contain the specified keyword.
     * 
     * @param {string} keyWord - The keyword to search for (case-insensitive).
     * @returns {string[]} An array of absolute paths to the matching files.
     * 
     * @example
     * const Picture = require('./Picture'); // Assuming the file is named Picture.js
     * const viewer = new Picture();
     * const results = viewer.show("aamu"); 
     * // Returns: ['C:\\...\\aamu_20634.png', 'C:\\...\\aamu_22246.png']
     */
    
    show(keyWord) {
        if (keyWord === undefined || keyWord.trim() === "" ) {
            return this.showAll();
        }
        keyWord = keyWord.toLowerCase();
        const picsDir = path.join(__dirname, 'Pics');
        const files = fs.readdirSync(picsDir);
        const fileList = [];
        
        for (const file of files) {
            const ext = path.extname(file).toLowerCase(); 
            const fileName = path.basename(file).toLowerCase();
            if ((ext === '.png' || ext === '.jpg') && fileName.includes(keyWord)) {
                const absolutePath = path.join(picsDir, file);
                fileList.push(absolutePath);
            }
        }
        return fileList;
    }

     /**
     * Retrieves all PNG and JPG files from the Pics directory.
     * 
     * @returns {string[]} An array of absolute paths to all images.
     */
    showAll() {
        const picsDir = path.join(__dirname, 'Pics');
        const files = fs.readdirSync(picsDir);
        const fileList = [];
        
        for (const file of files) {
            const ext = path.extname(file).toLowerCase(); 
            if (ext === '.png' || ext === '.jpg') {
                const absolutePath = path.join(picsDir, file);
                fileList.push(absolutePath);
            }
        }
        return fileList;
    }
}


module.exports = Picture;

const testObj = new Picture();
console.log(testObj.show("aamu"));
