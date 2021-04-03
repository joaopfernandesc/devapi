import { container } from 'tsyringe';

import IConnectorsRepository from '@modules/connectors/repositories/IConnectorsRepository';
import ConnectorsRepository from '@modules/connectors/infra/typeorm/repositories/ConnectorsRepository';

container.registerSingleton<IConnectorsRepository>(
  'ConnectorsRepository',
  ConnectorsRepository,
);
