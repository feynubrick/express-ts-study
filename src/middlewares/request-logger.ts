import { Request, Response, NextFunction } from "express";
import module from "../modules/_index";

export default function(req: Request, res: Response, next: NextFunction) {
    const currentTime = module.time.printAsIso(new Date());
    const method = req.method;
    const path = req.path;
    const body = JSON.stringify(req.body);
    console.log(`[${currentTime}] ${method} ${path} : ${body}`);
    next();
};