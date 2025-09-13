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

@Controller('coffees')
export class CoffeesController {
  // GET -> /coffees
  @Get()
  findAll(@Query() paginationQuery): string {
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees. Limit: ${limit} - Offset: ${offset}`;
  }

  // GET -> /coffees/:id
  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns #${id} coffee.`;
  }

  // POST -> /coffees
  @Post()
  create(@Body('name') body): string {
    return 'This action creates a coffee.';
  }

  // PATCH -> /coffees/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() body): string {
    return `This action updates #${id} coffee.`;
  }

  // DELETE -> /coffees/:id
  @Delete(':id')
  remove(@Param('id') id: string): string {
    return `This action removes #${id} coffee.`;
  }
}
