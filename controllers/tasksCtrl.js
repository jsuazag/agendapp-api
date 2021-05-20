import tasksServices from '../services/tasksServices';

const detail = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await tasksServices.detail(id);
        res.json(task);
    } catch (error) {
        res.status(error.errorStatus).send(error.message);
    }
}
const create = async (req, res) => {
    try {
        const taskData = req.body;
        const task = await tasksServices.create(taskData);
        res.json(task);
    } catch (error) {
        res.status(error.errorStatus).send(error.message);
    }
}
const getAll = (req, res) => {
    res.send('get all tasks with filters');
}
const updateStatus = (req, res) => {
    res.send('update status task');
}

export default {
    detail,
    create,
    getAll,
    updateStatus
}