import express, { NextFunction, Request, Response } from "express";
import shiftResolver from "./shift-resolver";
import bodyParser from "body-parser";
import cors from "cors";

const port = 8080;
const server = express();

server.use(bodyParser.json());

server.get(
  "^/shift/:code",
  cors(),
  (request: Request, res: Response, next: NextFunction) => {
    const code = request.params.code;

    const shift = shiftResolver(code);

    res.json({
      code,
      shift
    });
  }
);

server.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
