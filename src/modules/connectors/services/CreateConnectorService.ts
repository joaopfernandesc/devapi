import { injectable, inject } from 'tsyringe';

import IConnectorsRepository from '../repositories/IConnectorsRepository';

import Connector from '../infra/typeorm/entities/Connector';
import ICreateConnectorDTO from '../dtos/ICreateConnectorDTO';

@injectable()
export default class CreateConnectorService {
  constructor(
    @inject('ConnectorsRepository')
    private connectorsRepository: IConnectorsRepository,
  ) {}

  public async execute({
    name,
    type,
    privacy,
    baseUrl,
    logoUrl,
    category,
    description,
    status,
  }: ICreateConnectorDTO): Promise<Connector> {
    const connector = await this.connectorsRepository.create({
      name,
      type,
      privacy,
      baseUrl,
      logoUrl,
      category,
      description,
      status,
    });
    console.log(connector);

    return connector;
  }
}
