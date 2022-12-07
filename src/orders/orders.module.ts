import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders/orders.controller';

@Module({
  controllers: [OrdersController]
})
export class OrdersModule {}
