import {ApiProperty} from "@nestjs/swagger";

export class ImageDto {
  @ApiProperty({ example: '1', description: 'Primary key of data record' })
  id: string;
  @ApiProperty({ example: 'Apple', description: 'Title of an image' })
  title: string;
  @ApiProperty({ example: 'Image of an apple', description: 'Description of image' })
  description: string;
  @ApiProperty({ example: 'image:weifbveu...', description: 'Encoded image' })
  image: string | null;

  constructor() {
    this.id = '-1';
    this.title = 'New image entry';
    this.description = '';
    this.image = null;
  }
}
