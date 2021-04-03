import { injectable, inject } from 'tsyringe';

import IConnectorsRepository from '../repositories/IConnectorsRepository';

import IConnector from '../infra/mongoose/interfaces/IConnector';
import ICreateConnectorDTO from '../dtos/ICreateConnectorDTO';

@injectable()
export default class CreateUserService {
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
    status,
  }: ICreateConnectorDTO): Promise<IConnector> {
    const connector = await this.connectorsRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    await this.cacheProvider.invalidate('providers-list');

    return connector;
  }
}
