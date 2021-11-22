import {Controller, Get} from '@nestjs/common';
import {ProductionService} from "./production.service";
import {ProductionDto} from "./dtos/production.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('production')
@Controller('production')
export class ProductionController {
  constructor(private readonly productionService: ProductionService) {}

  @Get('data')
  @ApiOperation({ summary: 'Get image data of wine' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ProductionDto })
  public getData(): ProductionDto[] {
    return this.productionService.data;
  }
}
