import fs from 'fs';
import path from 'path';

const __dirname = path.dirname('./');

export const list = async () => {
    fs.readdir(
        path.join(__dirname, 'files'), 
        (err, files) => {
            if(err) throw new Error('FS operation failed');
            files.forEach(file => console.log(file))
        }
    );
};

list();
