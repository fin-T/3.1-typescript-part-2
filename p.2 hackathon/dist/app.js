"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
let app = (0, express_1.default)();
app.use(body_parser_1.default.json());
let counterPlus = 0;
app.get("/", (req, res) => {
    res.sendFile("index.html");
});
app
    .post("/click", (req, res) => {
    counterPlus = req.body.counterPlus;
    res.json({ count: counterPlus });
});
let port = 3000;
app.listen(port, () => {
    console.log("listening port", port);
});
