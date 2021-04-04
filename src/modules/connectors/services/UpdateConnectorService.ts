import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IConnectorsRepository from '../repositories/IConnectorsRepository';
import IUpdateConnectorDTO from '../dtos/IUpdateConnectorDTO';

import Connector from '../infra/typeorm/entities/Connector';

interface IRequest extends IUpdateConnectorDTO {
  connectorID: string;
}

@injectable()
export default class UpdateConnectorService {
  constructor(
    @inject('ConnectorsRepository')
    private connectorsRepository: IConnectorsRepository,
  ) {}

  public async execute({
    connectorID,
    name,
    type,
    privacy,
    baseUrl,
    logoUrl,
    category,
    description,
    status,
  }: IRequest): Promise<Connector | undefined> {
    const connector = await this.connectorsRepository.findById(connectorID);

    if (!connector) {
      throw new AppError('Connector not found.', 404);
    }

    Object.assign(connector, {
      name,
      type,
      privacy,
      baseUrl,
      logoUrl,
      category,
      description,
      status,
    });

    return this.connectorsRepository.save(connector);
  }
}
