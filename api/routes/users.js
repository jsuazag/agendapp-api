import { Router } from "express";
import usersController from '../../controllers/usersCtrl';
const route = Router();

export default (app) => {
    app.use('/users', route);
    route.post('/', usersController.create);
    route.get('/', usersController.getAll);
    route.get('/profile', usersController.profile);
};
