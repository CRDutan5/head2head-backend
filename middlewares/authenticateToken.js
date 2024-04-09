const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  const authHeader = await req.headers["authorization"];
  console.log("hellooo", authHeader);
  if (authHeader.includes("null"))
    return res.status(401).json({ message: "Unauthorized User" });
  else {
    const token = authHeader && (await authHeader.split(" ")[1]);
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.log(err);
        return res.status(403).json({ message: "Forbidden" });
      }

      req.user = user;
      next();
    });
  }
};

module.exports = { authenticateToken };
