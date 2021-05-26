export default ({ res, data = {}, scheme, next }) => {
  const options = {
    abortEarly: false,
    allowUnknown: true,
    //stripUnknown: true
  };

  const { error, value } = scheme.validate(data, options);

  if (error) {
    const errorMessage = error.details.map((x) => x.message).join(", ");
    res.status(400).send(errorMessage);
  } else {
    next();
  }
};
