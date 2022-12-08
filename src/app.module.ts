import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import entities from './typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    CustomersModule,
    ProductsModule,
    OrdersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'nest_db',
      entities: entities,
      synchronize: true
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
