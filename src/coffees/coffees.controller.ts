import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  // GET -> /coffees
  @Get()
  findAll(): Promise<Coffee[]> {
    return this.coffeesService.findAll();
  }

  // GET -> /coffees/:id
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Coffee> {
    return this.coffeesService.findOne(id);
  }

  // POST -> /coffees
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    return this.coffeesService.create(createCoffeeDto);
  }

  // PATCH -> /coffees/:id
  @Patch(':id')
  update(
    @Param('id') id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ): Promise<Coffee> {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  // DELETE -> /coffees/:id
  @Delete(':id')
  remove(@Param('id') id: number): Promise<Coffee> {
    return this.coffeesService.remove(id);
  }
}
