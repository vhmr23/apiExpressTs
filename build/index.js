"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORTR = 5000;
app.get('/', (_req, res) => {
    res.send('Hello World!');
});
app.listen(PORTR, () => {
    console.log(`Server Ragnar started on port ${PORTR}`);
});
