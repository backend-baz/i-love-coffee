import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

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
  create(@Body('name') body): void {
    return this.coffeesService.create(body);
  }

  // PATCH -> /coffees/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() body): void {
    return this.coffeesService.update(id, body);
  }

  // DELETE -> /coffees/:id
  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.coffeesService.remove(id);
  }
}
