import { Router } from "express";
import authController from '../../controllers/authCtrl';
import { signinScheme } from '../middlewares/signinScheme';
const route = Router();

export default (app) => {
    app.use('/auth', route);
    route.post('/signin', [signinScheme], authController.singin);
    route.post('/signup', authController.singup);
};
