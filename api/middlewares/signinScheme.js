import Joi from "joi";

export const signinScheme = (req, res, next) => {
  const scheme = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error, value } = scheme.validate(req.body);

  if (error) {
    console.log("error signinScheme", error);
    res.status(400).send("fiedls mandatory");
  } else {
    next();
  }
};
