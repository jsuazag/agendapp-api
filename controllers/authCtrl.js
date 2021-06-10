import usersService from '../services/usersServices';

const singin = async (req, res) => {
    try {
        const credentials = req.body;
        const response = await usersService.validate(credentials);
        res.json(response);
    } catch (error) {
        console.log(error.message, error.stackTrace);
        res.status(error.errorStatus).send(error.message);
    }
}

const singup = async (req, res) => {
    try {
        const userData = req.body;
        const user = await usersService.create(userData);
        res.json(user);
    } catch (error) {
        res.status(error.errorStatus).send(error.message);
    }
}

const check = async (req, res) => {
    res.json({'auth': true});
}

export default {
    singin,
    singup,
    check
}