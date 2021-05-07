import { Router } from "express";

const route = Router();

export default (app) => {
    
    app.use('/auth', route);

    route.post('/signup', (req, res) => {
        res.send('signup');
    });
    
    route.get('/signin', (req, res) => {
        res.send('signin');
    });

};