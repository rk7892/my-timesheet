import { Injectable, WritableSignal, signal } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  device: WritableSignal<'mobile' | 'bigScreen'> = signal<
    'mobile' | 'bigScreen'
  >('bigScreen');

  constructor() {
    
    
  }
}
