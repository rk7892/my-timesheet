import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { lastValueFrom } from 'rxjs';

export enum EnquireCustomerTypes {
  HOT = 'HOT',
  COLD = 'COLD',
  WARM = 'WARM'
};

export const CustomerTypes = Object.freeze({
  Vehicle: 'Vehicle',
  Spare: 'Spare',
});

export interface Enquire {
  id: number;
  customerType: EnquireCustomerTypes;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  location: string;
  description?: string;
  isActive: boolean;
  updatedAt: string;
  createdAt: string;
}

export type CreateEnquireReq = Omit<Enquire, 'updatedAt' | 'createdAt' | 'isActive' | 'id'>

export type EnquiryFollowUp = {
  enquireId: string;
  calledBy: string;
  subject: string;
  note: string;
  schedule?: Date;
};


export interface GetEnquiriesReqParams {
  offset: number,
  limit: number;
}

export interface GetEnquiriesResponse{
  count: number,
  result: Enquire[];
}

export type GetEnquiryResponse = Enquire


@Injectable({
  providedIn: 'root'
})
export class EnquireService {
  #config = inject(ConfigService)
  #http = inject(HttpClient)

  createEnquire(data: CreateEnquireReq) {
    const url = `${this.#config.API_BASE_URL}/enquiries`;
    return lastValueFrom(this.#http.post<Enquire>(url, data));
  }

  getEnquiries(params: GetEnquiriesReqParams) {
    const url = `${this.#config.API_BASE_URL}/enquiries`;
    return lastValueFrom(this.#http.get<GetEnquiriesResponse>(url, { params: { ...params } }));
  }

  getEnquire(id: string) {
    const url = `${this.#config.API_BASE_URL}/enquiries/${id}`;
    return lastValueFrom(this.#http.get<GetEnquiryResponse>(url));
  }

  addEnquiryFollowUp(followUpData: EnquiryFollowUp) {
    const url = `${this.#config.API_BASE_URL}/enquire-follow-ups`;
    return lastValueFrom(this.#http.post(url, followUpData))
  }
}
