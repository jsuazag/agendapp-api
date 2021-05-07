import express from "express";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT || 4000;
//juan.ramirez@nmksoftware.co;jhonathan.cordoba@nmksoftware.co

import api from './api';

app.use('/api', api());

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
