import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
    const child = spawn(args[0], args.slice(1));

    process.stdin.pipe(child.stdin);

    //child.stdout.pipe(process.stdout);
    child.stdout.on('data', (data) => {
        console.log(`child stdout:\n${data}`);
      });
    
};
