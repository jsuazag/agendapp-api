import Joi from "joi";
import validation from '../../utils/ValidationSchema';

export const signinScheme = (req, res, next) => {
  const scheme = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  validation({ res, data: req.body, scheme, next });
};
