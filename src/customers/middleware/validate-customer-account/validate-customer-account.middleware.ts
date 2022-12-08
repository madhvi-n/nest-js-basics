import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';


@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { validAccount } = req.headers;
    console.log('ValidateCustomerAccountMiddleware');

    if(validAccount) {
      next();
    } else {
      return res
        .status(403)
        .send({error: 'Account Invalid'});
    }
  }
}
