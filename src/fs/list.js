import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

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
