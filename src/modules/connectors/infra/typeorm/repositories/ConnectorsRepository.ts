import { getRepository, Repository, Not } from 'typeorm';

import IConnectorsRepository from '@modules/connectors/repositories/IConnectorsRepository';

import ICreateConnectorDTO from '@modules/connectors/dtos/ICreateConnectorDTO';
import IFindAllConnectorsDTO from '@modules/connectors/dtos/IFindAllConnectorsDTO';
import Connector from '../entities/Connector';

class ConnectorsRepository implements IConnectorsRepository {
  private ormRepository: Repository<Connector>;

  constructor() {
    this.ormRepository = getRepository(Connector);
  }

  public async create(connectorData: ICreateConnectorDTO): Promise<Connector> {
    const connector = this.ormRepository.create(connectorData);

    await this.ormRepository.save(connector);

    return connector;
  }

  public async update(connector: Connector): Promise<Connector> {
    return this.ormRepository.save(connector);
  }

  public async delete(connector: Connector): Promise<Connector> {
    return this.ormRepository.save(connector);
  }

  public async findAllConnectors(
    params: IFindAllConnectorsDTO,
  ): Promise<Connector[]> {
    let users: Connector[];

    if (params) {
      users = await this.ormRepository.find({
        where: {
          id: Not(params),
        },
      });
    } else {
      users = await this.ormRepository.find();
    }

    return users;
  }

  public async save(connector: Connector): Promise<Connector> {
    return this.ormRepository.save(connector);
  }
}

export default ConnectorsRepository;
