import express from "express";
import compression from "compression";
import render from "./ssr";
const app = express();
const port = process.env.PORT || 9003;

app.use(compression());

app.get("/", (req, res) => render(res))

app.listen(port, () => console.info(`App listening on port ${port}`))