const logger = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  const reqTime = new Date().getTime();

  console.log(url, method, reqTime);

  next();
};

const auth = (req, res, next) => {
  console.log("User is authorized for now");
  next();
};

module.exports = { logger, auth };
