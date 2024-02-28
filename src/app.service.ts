import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getPersonName(name: string): string {
    return `${name} <--- ('platformAPI')`;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
