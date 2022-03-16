import { Express, NextFunction, Request, Response } from "express";
import { validate } from "express-validation";
import { openAccountCTRL } from "./src/controller/account.controller";
import validations from "./src/middleware/validate";
import { ValidationError } from "express-validation";

const routes = (app: Express) => {
  console.log("routes");
  app.post(
    "/api/account/create",
    validate(validations.openAccount, {}, {}),
    openAccountCTRL
  );

  app.use(
    (
      err: ValidationError,
      req: Request<{}>,
      res: Response<{}>,
      next: NextFunction
    ) => {
      console.log("req", req);
      if (err) {
        return res.status(err.statusCode).json(err);
      }
      return res.status(500).json(err);
    }
  );
};

export default routes;
