import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AppRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(AppRepository) private appRepo: AppRepository,
  ) {}

  async addName(name: string): Promise<void> {
    await this.appRepo.addName(name);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
