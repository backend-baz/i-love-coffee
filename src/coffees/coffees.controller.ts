import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {
  }

  // GET -> /coffees
  @Get()
  findAll(@Query() paginationQuery): Coffee[] {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
  }

  // GET -> /coffees/:id
  @Get(':id')
  findOne(@Param('id') id: string): Coffee {
    return this.coffeesService.findOne(id);
  }

  // POST -> /coffees
  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto): void {
    return this.coffeesService.create(createCoffeeDto);
  }

  // PATCH -> /coffees/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto): void {
    return this.coffeesService.update(id, updateCoffeeDto);
  }

  // DELETE -> /coffees/:id
  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.coffeesService.remove(id);
  }
}
