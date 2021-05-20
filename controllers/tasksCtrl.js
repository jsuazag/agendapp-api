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

const getAll = async (req, res) => { // status? due_date_init? / due_date_end?
    try {
        const query = req.query;
        const tasks = await tasksServices.getAll(query);
        res.json(tasks);
    } catch (error) {
        res.status(error.errorStatus).send(error.message);
    }
}
const updateStatus = (req, res) => {
    const {status} = req.query;
    const {id} = req.params;
    // cambiar el estado de la tarea updateStatus(id, status)
    res.send('update status task');
}

export default {
    detail,
    create,
    getAll,
    updateStatus
}