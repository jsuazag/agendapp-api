import {Router} from "express";
import tasksController from '../../controllers/tasksCtrl';
import { authVerify } from "../../middlewares/authVerify";
const route = Router();

export default (app) => {
    app.use('/tasks', route);

    route.get('/', [authVerify], tasksController.getAll);
    route.get('/:id', [authVerify], tasksController.detail);
    route.post('/create', [authVerify], tasksController.create);
    route.put('/status/:id', [authVerify], tasksController.updateStatus);
}