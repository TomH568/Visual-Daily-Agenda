import fs from 'fs';
import path from 'path';

class Picture {
    constructor(keyWord, id = null) {
        this.id = id;
        this.keyWord = keyWord.toLowerCase();
    }
    show() {
        const files = fs.readdirSync(".");

        for (const file of files) {
            const ext = path.extname(file).toLowerCase(); 
            const fileName = path.basename(file).toLowerCase();
            if ((ext === '.jpeg' || ext === '.jpg') && fileName.includes(this.keyWord)) {
                return path.resolve(file);
                }
            }
        
    }
}