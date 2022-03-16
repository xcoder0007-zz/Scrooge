import { Request, Response } from "express";
import logger from "../../core/logger";
import { openAccount } from "./../service/account.service";

export async function openAccountCTRL(req: Request<{}>, res: Response<{}>) {
  try {
    const {
      fname,
      lname,
      username,
      dob,
      type,
      phone,
      address,
      city,
      state,
      country,
      currency,
      acceptTerms,
      ssn,
    } = req.body;

    const account: any = await openAccount([
      fname,
      lname,
      username,
      dob,
      type,
      phone,
      address,
      city,
      state,
      country,
      currency,
      acceptTerms,
      ssn,
    ]);
    return res.send(account);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
  }
}
