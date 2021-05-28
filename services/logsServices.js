import { LogAgenda } from "../models/logModel";
import Error from "../utils/Error";
import ErrorTypes from "../utils/ErrorTypes";

const create = async ({ who = "", log = "" }) => {
  try {
    const when = (new Date()).toISOString();
    const query = {
      when,
      who,
      log,
    };
    const logRegister = await LogAgenda.create(query);
    console.log("logRegister.id", logRegister.id);
    return true;
  } catch (error) {
    console.log("error--->", error);
    throw Error({
      message: error.message || ErrorTypes.DATABASE_QUERY,
      errorStatus: error.errorStatus,
      stackTrace: error.stackTrace || error,
    });
  }
};

export default {
  create,
};
