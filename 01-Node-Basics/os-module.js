const os = require("os");

//info about current user
const { username, homedir } = os.userInfo();
console.log(username, " and ", homedir);

//method to return system upTime
const upTime = os.uptime();
console.log(`The system's uptime is ${upTime}`);

//make an object of different properties
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
