import {ApiProperty} from "@nestjs/swagger";

export class ProductionDto {
  @ApiProperty({ example: '1', description: 'Primary key of data record' })
  id: string;
  @ApiProperty({ example: 'Pflaume', description: 'Type of wine' })
  type: string;
  @ApiProperty({ example: 'Pflaumenweinherstellung', description: 'Title of image' })
  title: string;
  @ApiProperty({ example: 'Zwetschgenwein', description: 'Description of image' })
  description: string;
  @ApiProperty({ example: '31.10.2021', description: 'Time record of harvest' })
  harvested: string | null;
  @ApiProperty({ example: '01.11.2021', description: 'Time for filling into fermentation tanks' })
  fementStart: string | null;
  @ApiProperty({ example: '17.11.2021', description: 'Time for filling into wine balloons' })
  ballonBeginnings: string[];
  @ApiProperty({ example: '13.01.2022', description: 'Time for bottling' })
  bottled: string | null;

  constructor() {
    this.id = '-1';
    this.type = '';
    this.title = 'New image entry';
    this.description = '';
    this.harvested = null;
    this.fementStart = null;
    this.ballonBeginnings = [];
    this.bottled = null;
  }
}
