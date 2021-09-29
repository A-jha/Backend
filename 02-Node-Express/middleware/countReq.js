let count = 0;
const inc = (req, res, next) => {
  if (req.method) {
    count++;
  }
  console.log(`Total request count ${count}`);
  next();
};

module.exports = { inc };
