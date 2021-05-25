import jwt from "jsonwebtoken";
import environment from "../config/environment";

export const authVerify = (req, res, next) => {
  // authorization:Bearer XXXXYYYZZZJJJJ
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, environment.secret);
      req.user = decoded;
    } catch (error) {
        console.log('error token', error)
        res.status(401).send("Unauthorizared");
    }
  } else {
    res.status(400).send("Token is mandatory");
  }
  next();
};
