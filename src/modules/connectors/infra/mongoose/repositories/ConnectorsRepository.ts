import * as mongoose from 'mongoose';

import IConnectorsRepository from '@modules/connectors/repositories/IConnectorsRepository';
import ICreateConnectorDTO from '@modules/connectors/dtos/ICreateConnectorDTO';
import Connector from '../models/Connector';
import IConnector from '../interfaces/IConnector';

class ConnectorsRepository implements IConnectorsRepository {
  private connectorModel: IConnector;

  constructor() {
    this.connectorModel = new Connector();
  }

  public async create(params: ICreateConnectorDTO): Promise<IConnector> {
    await this.connectorModel.create(params);
  }
}
