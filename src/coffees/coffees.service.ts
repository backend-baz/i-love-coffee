import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Espresso Roast',
      brand: 'Starbucks',
      flavors: ['caramel', 'roasted'],
    },
    {
      id: 3,
      name: 'Ethiopia Yirgacheffe',
      brand: 'Blue Bottle',
      flavors: ['citrus', 'floral'],
    },
    {
      id: 4,
      name: 'Dark Midnight',
      brand: 'Death Wish Coffee',
      flavors: ['dark chocolate', 'cherry'],
    },
    {
      id: 5,
      name: 'Vanilla Hazelnut',
      brand: 'Lavazza',
      flavors: ['vanilla', 'hazelnut'],
    },
    {
      id: 6,
      name: 'Colombia Supremo',
      brand: 'Peet’s Coffee',
      flavors: ['nutty', 'cocoa'],
    },
    {
      id: 7,
      name: 'Caffè Verona',
      brand: 'Starbucks',
      flavors: ['chocolate', 'aromatic'],
    },
    {
      id: 8,
      name: 'Honduras Organic',
      brand: 'Bulletproof',
      flavors: ['smooth', 'earthy'],
    },
    {
      id: 9,
      name: 'Ice Brew',
      brand: 'Illy',
      flavors: ['caramel', 'balanced'],
    },
    {
      id: 10,
      name: 'Pumpkin Spice',
      brand: 'Dunkin’ Donuts',
      flavors: ['pumpkin', 'spice'],
    },
  ];

  findAll(): Coffee[] {
    return this.coffees;
  }

  findOne(id: string): Coffee {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) throw new NotFoundException(`Coffee #${id} not found!`);
    return coffee;
  }

  create(createCoffeeDto: any): void {
    this.coffees.push(createCoffeeDto);
  }

  update(id: string, createCoffeeDto: any): void {
    const { name, brand, flavors } = createCoffeeDto;
    const index = this.coffees.findIndex((item) => item.id === +id);
    if (index >= 0)
      this.coffees[index] = {
        id: +id,
        name: name,
        brand: brand,
        flavors: flavors,
      };
  }

  remove(id: string): void {
    const index = this.coffees.findIndex((item) => item.id === +id);
    if (index >= 0) this.coffees.splice(index, 1);
  }
}
