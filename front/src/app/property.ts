export class Property {
  name: string;
  description: string = "";
  images?: string[] = [];
  address?: string;
  locality?: string;
  price: number;
  area?: string;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}
