const detail = (req, res) => {
    res.send('get task by id');
}
const create = (req, res) => {
    res.send('create new task');
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