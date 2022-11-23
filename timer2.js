//replace process.argv with user input
//let input = process.argv;
//input.splice(0,2);
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//rl.question("Please set a timer between 1 and 9 seconds: ", (timerSet) => {
//user can press b and it should beep right away
let keepRunning = true;

const setATimer = () => {
  process.stdout.write("Please set a timer between 1 and 9 seconds: ");
  process.stdin.on("keypress", (str, key) => {
    if (key.name == 'b') {
    process.stdout.write(`\x07\n`); //immediately returns a beep
    // setATimer();
    } else if (key.ctrl && key.name === 'c') {
      process.stdout.write(`\nThanks for using me, ciao!\n`);
      rl.close();
    } else if (!isNaN(key.name)) {
      console.log(`\nSetting timer for ${key.name} seconds...`);
      setTimeout(() => {
        //process.stdout.write(i);
        process.stdout.write('\x07'); // causes it to "write" a beeping sound (node system beep)
      }, key.name * 1000);
      // setATimer();
    } else if (isNaN(key.name)) {
      process.stdout.write(`\nThat's not a number...\n`);
      // setATimer();
    }
    rl.close()
  })
};

setATimer();

//console.log(input);
// if (input.length !== 0) {
//   for (let i in input) {
//     if (input[i] >= 0 && !isNaN(input[i])) {
//       setTimeout(() => {
//         //process.stdout.write(i);
//         process.stdout.write('\x07'); // causes it to "write" a beeping sound (node system beep)
//       }, input[i] * 1000);
//     }
//   }
// }


//user can input between 1 and 9 and it should
//  - immediately output "setting timer for x seconds...", and
//  - beep after that number of seconds has passed
//ctrl+c to exit and program will say, "Thanks for using me, ciao!" before terminating

