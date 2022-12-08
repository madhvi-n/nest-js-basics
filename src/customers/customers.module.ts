import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { NextFunction } from 'express';
import { CustomersController } from './controllers/customers/customers.controller';
import { ValidateCustomerMiddleware } from './middleware/validate-customer/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(
      ValidateCustomerMiddleware,
      (req: Request, res: Response, next: NextFunction) => {
        console.log('Another nested middleware');
        next();
      })
    .exclude({
      path: 'api/customers/create',
      method: RequestMethod.POST
    })
    .forRoutes(CustomersController)
    // .forRoutes(
    //   {
    //     path: '/customers/search/:id',
    //     method: RequestMethod.GET
    //   },
    //   {
    //     path: '/customers',
    //     method: RequestMethod.GET
    //   }
    // );
  }
}
