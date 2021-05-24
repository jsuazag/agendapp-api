import jwt from "jsonwebtoken";
import { SECRET } from "../config/constants";

export const authVerify = (req, res, next) => {
  // authorization:Bearer XXXXYYYZZZJJJJ
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    const token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, SECRET);
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
