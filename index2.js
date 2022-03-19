const { nextISSIimesForMyLocation } = require('./iss_promised');

const printFlyOverTimes = function(flyOverTimes) {
  for (const time of flyOverTimes) {
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};

nextISSIimesForMyLocation()
  .then((flyOverTimes) => {
    printFlyOverTimes(flyOverTimes);
  })
  .catch((error) => {
    console.log("It didn't work:", error.message);
  });