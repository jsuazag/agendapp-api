import ErrorTypes from './ErrorTypes';

export default Error = ({ errorType, errorStatus = 500, stackTrace = "" }) => {
  return {
    message: ErrorTypes[errorType] || ErrorTypes.UNDEFINED,
    errorStatus,
    stackTrace,
  };
};
