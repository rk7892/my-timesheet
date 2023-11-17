import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { lastValueFrom } from 'rxjs';

// export enum CustomerTypes {
//   HOT = 'HOT',
//   COLD = 'COLD',
//   WARM = 'WARM'
// };

export enum CustomerTypes {
  INDIVIDUAL = 'INDIVIDUAL',
  BUSINESS = 'BUSINESS'
};
export enum NamePrefix {
  Mr = 'Mr',
  Miss = 'Miss',
  Mrs = 'Mrs'
};

export interface Customer {
  id: number;
  customerType: CustomerTypes;
  enquireId:number;
  namePrefix: NamePrefix;
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  workPhone:string;
  email: string;
  location: string;
  pan: JSON;
  aadhar:JSON;
  licence:JSON;
  createBy:number;
  isActive: boolean;
  billingAddress: JSON;
  shippingAddress: JSON;
  updatedAt: string;
  createdAt: string;
}
export type CreateCustomerReq = Omit<Customer, 'updatedAt' | 'createdAt' | 'isActive' | 'id' | 'enquireId' | 'namePrefix' | 'workPhone'>

export interface GetCustomersReqParams {
  offset: number,
  limit: number;
}

export interface GetCustomersResponse{
  count: number,
  result: Customer[];
}
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  #config = inject(ConfigService)
  #http = inject(HttpClient)

  createCustomer(data: CreateCustomerReq) {
    const url = `${this.#config.API_BASE_URL}/customer`;
    return lastValueFrom(this.#http.post<Customer>(url, data));
  }

  getCustomers(params: GetCustomersReqParams) {
    const url = `${this.#config.API_BASE_URL}/customer`;
    return lastValueFrom(this.#http.get<GetCustomersResponse>(url, { params: { ...params } }));
  }
}
