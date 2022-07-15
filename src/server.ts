import express, { Express, Request, Response, Router } from "express";
import mainRouter from "./routes/_index";

const app: Express = express();
const port: number = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

app.use(mainRouter);

app.listen(port, () => {
    console.log(`Example App listening on port ${port}`);
});
