export default Error = ({ message, errorStatus = 500, stackTrace = "" }) => {
  const error = {
    message,
    errorStatus,
    stackTrace,
  };
  return error;
};
