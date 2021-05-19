import UserModel from "../models/userModel";
import Error from "../utils/Error";
import ErrorTypes from "../utils/ErrorTypes";

const validate = async ({ email, password }) => {
  try {
    const user = await UserModel.findOne({ email, password })
    const token = 'VVVCCCZZ';
    if (user) {
      // TODO: generar token
      return { token };
    }
    throw Error({ errorType: ErrorTypes.AUTHENCATION, errorStatus: 401 });
  } catch (error) {
    throw Error({ 
      errorType: ErrorTypes.DATABASE_QUERY, 
      stackTrace: error.message || error
    });
  } 
}

const create = async ({ name, role, email, password }) => {
  try {
    // TODO: encrypt password
    const user = UserModel({
      name,
      role,
      email,
      password,
    });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

export default {
  create,
  validate
};
