import {Controller, Get} from '@nestjs/common';
import {ImageService} from "./image.service";
import {ImageDto} from "./dtos/image.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('image')
@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get('data')
  @ApiOperation({ summary: 'Get data of images' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ImageDto })
  public getData(): ImageDto[] {
    return this.imageService.data;
  }
}
