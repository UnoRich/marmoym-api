import { NextFunction, Request, Response } from 'express';

import AppError from "@models/AppError";
import { expressLog } from '@modules/Log';
import marmoymConfig from '@config/marmoymConfig';
import ResponseType from '@models/ResponseType';
import Token, { AUTH_TOKEN } from '@modules/Token';

export default function tokenAuthHandler(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies[AUTH_TOKEN];
  expressLog.info(`Token auth handle: %s`, token);

  if (token) {
    Token.decode({
      token,
    })
      .then((tokenDecoded) => {
        res.locals['username-decoded'] = tokenDecoded['username'];
        next();
      })
      .catch((err) => {
        throw AppError.of({
          args: [],
          type: ResponseType.TOKEN_INVALID,
        });  
      });
  } else {
    throw AppError.of({
      args: [ req.cookies ],
      type: ResponseType.TOKEN_VOID,
    });
  }
};
