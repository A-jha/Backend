const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//on and emit method
//keep track of the orders
// additional args
// build in modules utilizes it

customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log("Some other logic can be here");
});

customEmitter.emit("response", "Avinash", 21);
