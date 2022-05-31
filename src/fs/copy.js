import fs from 'fs';
import path from 'path';

const __dirname = path.dirname('./');

export const copy = async () => {
    if (!fs.existsSync('./files')) {
        throw new Error('FS operation failed');
    }
    fs.mkdir(
        path.join(__dirname, 'files_copy'), 
        (err) => {
            if(err) throw new Error('FS operation failed');
        }
    );
    fs.cp(
        path.join(__dirname, 'files'), 
        path.join(__dirname, 'files_copy'), 
        { recursive: true }, 
        (err) => {
            if(err) throw new Error('FS operation failed');
        }
    );
};

copy();