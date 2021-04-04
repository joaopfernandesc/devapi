import { getRepository, Repository, ILike } from 'typeorm';
import _ from 'lodash';

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

  public async delete(id: string): Promise<void> {
    await this.ormRepository.softDelete(id);
  }

  public async findAllConnectors(
    params: IFindAllConnectorsDTO,
    withDeleted = false,
  ): Promise<Connector[]> {
    const iLikeFilters = ['category', 'name'];

    const filters = Object.entries(params).reduce((acc, [key, value]) => {
      const filterValue = iLikeFilters.includes(key)
        ? ILike(`%${value}%`)
        : value;

      _.set(acc, key, filterValue);
      return acc;
    }, {});

    !withDeleted && Object.assign(filters, { deletedAt: null });

    const connectors = await this.ormRepository.find({ where: filters });
    return connectors;
  }

  public async save(connector: Connector): Promise<Connector> {
    return this.ormRepository.save(connector);
  }

  public async bulkCreate(data: ICreateConnectorDTO[]): Promise<Connector[]> {
    return this.ormRepository.save(data);
  }
}

export default ConnectorsRepository;
