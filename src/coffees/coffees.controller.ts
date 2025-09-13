import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    // GET: /coffees
    @Get()
    findAll(): string {
        return 'This action returns all coffees.';
    }

    // GET: /coffees/:id
    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns #${id} coffee.`;
    }

    // POST: /coffees
    @Post()
    create(@Body('name') body): string {
        return 'This action creats a coffee.';
    }
}
