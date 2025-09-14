import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';

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

  findOne(id: number): Coffee {
    const coffee = this.coffees.find((item) => item.id === id);
    if (!coffee) throw new NotFoundException(`Coffee #${id} not found!`);
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto): void {
    this.coffees.push({
      id: this.coffees[this.coffees.length - 1].id + 1,
      name: createCoffeeDto.name,
      brand: createCoffeeDto.brand,
      flavors: createCoffeeDto.flavors,
    });
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto): void {
    const index = this.coffees.findIndex((item) => item.id === id);
    if (index < 0) throw new NotFoundException(`Coffee #${id} not found!`);
    this.coffees[index] = {
      id: id,
      name: updateCoffeeDto.name ?? '',
      brand: updateCoffeeDto.brand ?? '',
      flavors: updateCoffeeDto.flavors ?? [],
    };
  }

  remove(id: number): void {
    const index = this.coffees.findIndex((item) => item.id === id);
    if (index < 0) throw new NotFoundException(`Coffee #${id} not found!`);
    this.coffees.splice(index, 1);
  }
}
