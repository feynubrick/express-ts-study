import { Request, Response } from "express";
import STATUS_CODE from "../../modules/constants/http-response-status-codes";

export default function (req: Request, res: Response) {
  res.status(STATUS_CODE.OK_200).send("Success");
}
