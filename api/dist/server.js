"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 5000;
const appName = process.env.APP_NAME;
app.listen(PORT, () => {
    console.log(`${appName} is listening on port ${PORT}`);
});
app.get('/api/hi', (req, res) => {
    res.json({ message: "hi ya" });
});
