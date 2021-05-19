import TaskModel from "../models/taskModel";
import Error from "../utils/Error";
import ErrorTypes from "../utils/ErrorTypes";

const create = async ({
  title,
  due_date,
  description,
  responsible,
  collaborators,
}) => {
  try {
    const task = TaskModel({
        title,
        due_date,
        description,
        responsible,
        collaborators
    });
    await task.save();
    return task;
  } catch (error) {
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
