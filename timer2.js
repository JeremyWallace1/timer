const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdin.on("keypress", (str, key) => {
  // console.log("Please set a timer between 1 and 9 seconds: ");
  if (key.name === 'b') {
    process.stdout.write(`\r \r\x07`); 
  }
  if (key.ctrl && key.name === 'c') {
    console.log(`Thanks for using me, ciao!`);
    rl.close();
  }
  if (!isNaN(key.name)) {
    console.log(`\rSetting timer for ${key.name} seconds...`);
    setTimeout(() => {
      process.stdout.write('\r\x07'); 
    }, key.name * 1000);
  }
});