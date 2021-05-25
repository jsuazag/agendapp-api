import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import environment from '../config/environment';
import UserModel from "../models/userModel";
import Error from "../utils/Error";
import ErrorTypes from "../utils/ErrorTypes";

const validate = async ({ email, password }) => {
  try {
    const user = await UserModel.findOne({ email })
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const payload = {
          idUser: user.id,
          role: user.role
        }
        const token = jwt.sign(payload, environment.secret, { expiresIn: '12h' });
        return { token };
      }
    }
    throw Error({ message: ErrorTypes.AUTHENCATION, errorStatus: 401 });
  } catch (error) {
    throw Error({ 
      message: error.message || ErrorTypes.DATABASE_QUERY,
      errorStatus: error.errorStatus,
      stackTrace: error.stackTrace || error
    });
  } 
}

const create = async ({ name, role, email, password }) => {
  try {
    const userCheckEmail = await UserModel.findOne({ "email": email });
    if (userCheckEmail) {
      throw Error({ message: ErrorTypes.EMAIL_DUPLICATED, errorStatus: 401 });
    }
    const saltRounds = 10;
    const passwordEncrypted = await bcrypt.hash(password, saltRounds);

    const user = UserModel({
      name,
      role,
      email,
      password: passwordEncrypted,
    });
    await user.save();
    return user;
  } catch (error) {
    throw Error({ 
      message: error.message || ErrorTypes.DATABASE_QUERY,
      errorStatus: error.errorStatus,
      stackTrace: error.stackTrace,
    });
  }
};

const getAll = async () => {
  try {
    const users = await UserModel.find();
    return users;
  } catch (error) {
    throw Error({ 
      message: error.message || ErrorTypes.DATABASE_QUERY,
      errorStatus: error.errorStatus,
      stackTrace: error.stackTrace,
    });
  }
}

export default {
  create,
  validate,
  getAll
};
