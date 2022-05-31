import fs from 'fs';
import path from 'path';

const __dirname = path.dirname('./');

export const rename = async () => {
    if(fs.existsSync(path.join(__dirname, 'files/properFilename.md'))) {
        throw new Error('FS operation failed');
    }
    fs.rename(
        path.join(__dirname, 'files/wrongFilename.txt'),
        path.join(__dirname, 'files/properFilename.md'),  
        (err) => {
            if(err) throw new Error('FS operation failed');
        }
    );
};

rename();
