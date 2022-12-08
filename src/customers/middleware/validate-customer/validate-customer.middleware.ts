import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';


@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('ValidateCustomerMiddleware');
    const { authorization } = req.headers;
    if (!authorization)
      return res
        .status(403)
        .send({error: 'No authentication token was provided.'});

    // Validating authorization against csrf token length
    if( authorization.length == 20){
      next();
    } else {
      return res
        .status(403)
        .send({error: 'Invalid authentication token'});
    }
  }
}
