import fs from 'fs';
import path from 'path';

class Picture{

    /**
     * Ищет все PNG-файлы в текущей папке, содержащие указанное ключевое слово.
     * 
     * @param {string} keyWord - Ключевое слово для поиска (регистр не важен).
     * @returns {string[]} Массив абсолютных путей к найденным файлам.
     * 
     * @example
     * const viewer = new Picture();
     * const results = viewer.show("aamu"); 
     * // Вернет: ['C:\\...\\aamu_20634.png', 'C:\\...\\aamu_22246.png']
     */
    
    show(keyWord) {
        keyWord = keyWord.toLowerCase();
        const files = fs.readdirSync(".");
        const fileList = [];
        
        for (const file of files) {
            const ext = path.extname(file).toLowerCase(); 
            const fileName = path.basename(file).toLowerCase();
            if (ext === '.png' && fileName.includes(keyWord)) {
                fileList.push(path.resolve(file));
                }
            }
        return fileList;
    }
}

//const testObj = new Picture();
//console.log(testObj.show("aamu"));
