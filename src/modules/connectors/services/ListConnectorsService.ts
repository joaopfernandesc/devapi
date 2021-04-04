import { injectable, inject } from 'tsyringe';

import IConnectorsRepository from '../repositories/IConnectorsRepository';

import Connector from '../infra/typeorm/entities/Connector';
import IFindAllConnectorsDTO from '../dtos/IFindAllConnectorsDTO';

@injectable()
export default class UpdateConnectorService {
  constructor(
    @inject('ConnectorsRepository')
    private connectorsRepository: IConnectorsRepository,
  ) {}

  public async execute(filters: IFindAllConnectorsDTO): Promise<Connector[]> {
    const connectors = await this.connectorsRepository.findAllConnectors(
      filters,
    );

    return connectors;
  }
}
