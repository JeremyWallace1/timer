// timer will beep after a specified amount of time has passed (in seconds).

// the user can specify an unlimited number of alarms using command line arguments e.g. node timer1.js 10 3 5 15 9

let input = process.argv;
input.splice(0,2);
//console.log(input);
if (input.length !== 0) {
  for (let i in input) {
    if (input[i] >= 0 && !isNaN(input[i])) {
      setTimeout(() => {
        //process.stdout.write(i);
        process.stdout.write('\x07'); // causes it to "write" a beeping sound (node system beep)
      }, input[i] * 1000);
    }
  }
}


// EDGE CASES
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.