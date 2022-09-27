const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("access denied");

  try {
    const verified = jwt.verify(token, 'akshay');
    req.Admin = verified;
    // console.log(req.host);
    // req.host;authorizationauthorization
    next();
  } catch (error) {
    res.status(400).send("invalid token");
  }
};


module.exports = auth; 