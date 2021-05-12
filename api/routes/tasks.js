import {Router} from "express";
import tasksController from '../../controllers/tasksCtrl';
const route = Router();

export default (app) => {
    app.use('/tasks', route);
    route.get('/', tasksController.getAll);
    route.get('/:id', tasksController.detail);
    route.post('/create', tasksController.create);
    route.put('/status/:id', tasksController.updateStatus);
}