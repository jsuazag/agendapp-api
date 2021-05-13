import UserModel from '../models/userModel';

const create = async ({ name, role, email, password }) => {
    try {
        // TODO: encrypt password
        const user = UserModel({
            name,
            role,
            email,
            password
        });
        await user.save();
        return user;
    } catch (error) {
        throw (error);
    }
}

export default {
    create
}