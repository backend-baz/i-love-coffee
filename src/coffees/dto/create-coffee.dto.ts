import {
  IsString,
  MinLength,
  MaxLength,
  IsNotEmpty,
  IsAlpha,
  IsArray,
} from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  @IsNotEmpty()
  @IsAlpha('en-US')
  @MinLength(2)
  @MaxLength(25)
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @IsAlpha('en-US')
  @MinLength(2)
  @MaxLength(50)
  readonly brand: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty({ each: true })
  @IsAlpha('en-US', { each: true })
  @MinLength(3, { each: true })
  readonly flavors: string[];
}
