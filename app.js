import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 4000;

import api from './api';

app.use('/', api());

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
