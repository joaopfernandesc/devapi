import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IConnectorsRepository from '../repositories/IConnectorsRepository';

interface IRequest {
  connectorID: string;
}

@injectable()
export default class UpdateConnectorService {
  constructor(
    @inject('ConnectorsRepository')
    private connectorsRepository: IConnectorsRepository,
  ) {}

  public async execute({ connectorID }: IRequest): Promise<void> {
    const connector = await this.connectorsRepository.findById(connectorID);

    if (!connector || connector.deletedAt) {
      throw new AppError('Connector not found.', 404);
    }
    await this.connectorsRepository.delete(connectorID);
  }
}
