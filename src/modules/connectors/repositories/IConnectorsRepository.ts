import ICreateConnectorDTO from '@modules/connectors/dtos/ICreateConnectorDTO';
import IFindAllConnectorsDTO from '@modules/connectors/dtos/IFindAllConnectorsDTO';
import Connector from '../infra/typeorm/entities/Connector';

export default interface IConnectorsRepository {
  findById(id: string): Promise<Connector | undefined>;
  create(data: ICreateConnectorDTO): Promise<Connector>;
  save(connector: Connector): Promise<Connector | undefined>;
  delete(connectorID: string): Promise<void>;
  findAllConnectors(filters?: IFindAllConnectorsDTO): Promise<Connector[]>;
  bulkCreate(data: ICreateConnectorDTO[]): Promise<Connector[]>;
}
