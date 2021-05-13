import usersService from '../services/usersServices';

const singin = (req, res) => {
    res.send('signin');
}

const singup = async (req, res) => {
    try {
        const userData = req.body;
        const user = await usersService.create(userData);
        res.json(user);
    } catch (error) {
        res.status(500).send('Error creating user');
    }
}

export default {
    singin,
    singup
}