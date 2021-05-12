import { Router } from "express";
import authController from '../../controllers/authCtrl';
const route = Router();

export default (app) => {
    app.use('/auth', route);
    route.post('/signin', authController.singin);
    route.post('/signup', authController.singup);
};
