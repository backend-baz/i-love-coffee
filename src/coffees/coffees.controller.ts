import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    // GET: /coffees
    @Get('/flavors')
    findAll(): string {
        return 'This action returns all coffees.';
    }
}
