import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getDescription(): { message: string } {
    return { message: 'Welcome to image service!' };
  }
}
