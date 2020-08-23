import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async addName(@Body() body: any): Promise<void> {
    const name = body.name;
    await this.appService.addName(name);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
