import { Controller, Get, Req, Res, Param, Body, Post, ParseIntPipe, HttpStatus, HttpException } from '@nestjs/common';
import { CustomersService } from '../../services/customers/customers.service';
import { CreateCustomerDto } from '../../dtos/customers/create-customer.dto';
import { Request, Response } from 'express';

@Controller('customers')
export class CustomersController {

  constructor(private customerService: CustomersService) {}

  @Get('')
  getAllCustomers(){
    return this.customerService.findCustomers();
  }

  @Get('/customers/:id')
  getCustomerById(
    @Param('id') id: number,
    @Req() req: Request,
    @Res() res: Response
  ) {
    return this.customerService.findCustomerById(id);
  }

  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response
  ) {
    const customer = this.customerService.findCustomerById(id);
    if(customer) {
      res.send(customer);
    } else {
      res.status(400).send({message: 'Customer not found'});
    }
  }

  @Get('/search/:id')
  searchCustomer(
    @Param('id', ParseIntPipe) id: number,
  ) {
    const customer = this.customerService.findCustomerById(id);
    if(customer) return customer;
    else throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
  }

  @Post('/create/')
  createCustomer(@Body() customer: CreateCustomerDto) {
    this.customerService.createCustomer(customer);
  }
}
