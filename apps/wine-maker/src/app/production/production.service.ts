import { Injectable } from '@nestjs/common';
import {ProductionDto} from "./dtos/production.dto";

@Injectable()
export class ProductionService {
  private _data: ProductionDto[] = [{
      id: '0',
      type: '',
      title: 'Pfirsichwein',
      description: '',
      harvested: null,
      fementStart: null,
      ballonBeginnings: [],
      bottled: null
  }]

  public get data(): ProductionDto[] {
    return this._data;
}
}
