import express from "express";
import mongodb from './connection/mongoconn';
import sequalize from './connection/postgresconn';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const PORT = process.env.PORT || 4000;

import job from './jobs/dueDateTasksJob';
import api from './api';

app.use('/', api());

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
