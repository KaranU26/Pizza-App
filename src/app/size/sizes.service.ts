import { Injectable } from '@angular/core';
import { Sizes } from './sizes.model';

@Injectable({
  providedIn: 'root'
})

export class SizesService {

  private sizes: Sizes[] = [
    {
      name: 'Small',
      price: 5.95
    },
    {
      name: 'Medium',
      price: 7.00
    },
    {
      name: 'Large',
      price: 8.00
    },
    {
      name: 'X-Large',
      price: 10
    }
  ];

  getAllSizes(){
    return [...this.sizes];
  }

}
