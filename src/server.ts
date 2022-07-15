import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";

import mainRouter from "./routes/_index";
import middlewares from "./middlewares/_index";

const app: Express = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(middlewares.requestLogger);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.use(mainRouter);

app.listen(port, () => {
    console.log(`Example App listening on port ${port}`);
});
