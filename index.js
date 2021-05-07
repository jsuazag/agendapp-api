import express from "express";
const app = express();
app.use(express.json())
const PORT = process.env.PORT || 4000;

/* 
    1. req -> query params
    2. params -> por url usando /
    3. body -> cuerpo
*/

app.get("/", (req, res) => {
  res.send("mi primera ruta en express");
});

app.post("/:id", (req, res) => {
    const id = req.params.id;
    const name = req.query.name;
    const lastname = req.query.lastname;
    const body = req.body;
    console.log('body', body);
    const data = JSON.stringify(body);
    res.send(`id: ${id} - name: ${name}, ${lastname} - body ${data}`);
});

app.delete("/", (req, res) => {
    res.send('mi primer delete');
});

app.put("/", (req, res) => {
    res.send('mi primer put');
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
