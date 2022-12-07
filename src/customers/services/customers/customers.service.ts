import { Injectable } from '@nestjs/common';
import { Customer } from '../../types/customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'janedoe@gmail.com',
    },
    {
      id: 3,
      name: 'Jelly Bean',
      email: 'jellybean@gmail.com',
    }
  ]

  findCustomers(){
    return this.customers;
  }

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  findCustomerByEmail(email: string) {
    return this.customers.find((user) => user.email === email);
  }

  createCustomer(customer) {
    this.customers.push(customer);
  }
}
