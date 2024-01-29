import express from "express";
import bodyParser from 'body-parser';

let app = express();
app.use(bodyParser.json());

let counterPlus = 0;
app.get("/", (req, res) => {
    res.sendFile("index.html");
})

app
.post("/click", (req, res) => {
    counterPlus = req.body.counterPlus;
    res.json( {count: counterPlus});
})

let port = 3000;

app.listen(port, () => {
    console.log("listening port", port);
})
