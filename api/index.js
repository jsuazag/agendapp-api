import { Router } from 'express';
import auth from './routes/auth';
import tasks from './routes/tasks';
import users from './routes/users';

export default () => {
    const app = Router();

    auth(app);
    tasks(app);
    users(app);

    return app;
}