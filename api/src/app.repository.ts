import { EntityRepository, Repository } from 'typeorm';
import { App } from './app.entity';

@EntityRepository(App)
export class AppRepository extends Repository<App> {
  async addName(name: string): Promise<void> {
    const newApp = new App();
    newApp.name = name;

    await newApp.save();
  }
}
