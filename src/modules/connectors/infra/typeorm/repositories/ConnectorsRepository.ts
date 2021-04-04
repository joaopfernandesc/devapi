import { getRepository, Repository, ILike } from 'typeorm';
import * as _ from 'lodash';

import IConnectorsRepository from '@modules/connectors/repositories/IConnectorsRepository';

import ICreateConnectorDTO from '@modules/connectors/dtos/ICreateConnectorDTO';
import IFindAllConnectorsDTO from '@modules/connectors/dtos/IFindAllConnectorsDTO';
import Connector from '../entities/Connector';

class ConnectorsRepository implements IConnectorsRepository {
  private ormRepository: Repository<Connector>;

  constructor() {
    this.ormRepository = getRepository(Connector);
  }

  public async findById(id: string): Promise<Connector | undefined> {
    const connector = await this.ormRepository.findOne(id);
    return connector;
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
    deletedAt = null,
  ): Promise<Connector[]> {
    const iLikeFilters = ['category', 'name'];

    const filters = Object.entries(params).reduce((acc, [key, value]) => {
      const filterValue = iLikeFilters.includes(key)
        ? ILike(`%${value}%`)
        : value;

      _.set(acc, key, filterValue);
      return acc;
    }, {});
    Object.assign(filters, { deletedAt });

    const connectors = await this.ormRepository.find({ where: filters });
    return connectors;
  }

  public async save(connector: Connector): Promise<Connector> {
    return this.ormRepository.save(connector);
  }
}

export default ConnectorsRepository;
