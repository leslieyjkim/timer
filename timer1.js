// read command line args
const args = process.argv.slice(2);

// args can have multiple values
// by using loop, do setTimeout and during the timeout, make beep sound

const sleepAndAlarm = function (seconds) {
  // setTimeout with callback function, this callbackfunction will do sleep and beep
  setTimeout(() => {
    process.stdout.write("\x07"); //beep sound
  }, seconds * 1000); // because setTimeout would be running based on miliseconds
};

// args : [second,...], type would be string
// by using foreach, cast string to float because it can have 2.1 seconds
args.forEach((arg) => {
  let castStringToFloat = parseFloat(arg);
  // if not properly casted
  if (isNaN(castStringToFloat)) {
    console.log("no beep because ${arg} is not proper format");
  } else if (castStringToFloat <= 0) {
    // second is less or equal to 0
    console.log("no negative second or zero second allowed");
  } else {
    sleepAndAlarm(castStringToFloat);
  }
});
