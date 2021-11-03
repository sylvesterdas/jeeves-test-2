import { Injectable } from '@angular/core';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  properties: Property[] = [
    {
      name: "Property 1",
      description: "none",
      images: [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      address: "21 Jump street",
      locality: '20th ave',
      price: 2500000,
      area: '250 sq yards'
    },
    {
      name: "Property 2",
      description: "none",
      images: [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      address: "21 Jump street",
      locality: '22nd ave',
      price: 250000,
      area: '250 sq yards'
    },
    {
      name: "Property 3",
      description: "none",
      images: [
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      ],
      address: "21 Jump street",
      locality: '21st ave',
      price: 25000,
      area: '250 sq yards'
    },
  ]
}
