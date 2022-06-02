import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export const copy = async () => {
    fs.access(
        path.join(__dirname, 'files'),
        (err) => {
            if(err) throw new Error('FS operation failed');
        }
    );
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
