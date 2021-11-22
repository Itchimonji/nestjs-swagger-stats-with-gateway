import { Injectable } from '@nestjs/common';
import {ImageDto} from "./dtos/image.dto";

@Injectable()
export class ImageService {
  private _data: ImageDto[] = [{
      id: '0',
      title: 'Image of apple',
      description: '',
      image: null
  }]

  public get data(): ImageDto[] {
    return this._data;
}
}
