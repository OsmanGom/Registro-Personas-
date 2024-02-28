const cors = require('cors');
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const personaController = require('./Controller');

const app = express();
app.use(cors());

app.use(bodyParser.json())
app.post("/guardarPersona", async(req, res) => {

    const {personas} = req.body
    const response = await personaController.guardarPersona(personas);

    res.send({respuesta: response});
  });


app.get("/test", (req, res) => {
  //res.send("hello world!");
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(3000, () => {
  console.log("server listening on port", 3000);
});