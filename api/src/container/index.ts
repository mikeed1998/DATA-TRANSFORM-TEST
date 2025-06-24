import { createContainer, asClass } from 'awilix';
import { DataService } from '../services/data.service';
import { DatabaseService } from '../services/database.service';

export const configureContainer = () => {
  const container = createContainer({
    injectionMode: 'CLASSIC'
  });

  container.register({
    databaseService: asClass(DatabaseService).singleton(),
    dataService: asClass(DataService).singleton()
  });

  return container;
};