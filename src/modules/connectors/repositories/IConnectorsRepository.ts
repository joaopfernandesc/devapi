import ICreateConnectorDTO from '@modules/connectors/dtos/ICreateConnectorDTO';
import IFindAllConnectorsDTO from '@modules/connectors/dtos/IFindAllConnectorsDTO';
import Connector from '../infra/typeorm/entities/Connector';

export default interface IConnectorsRepository {
  findById(id: string): Promise<Connector | undefined>;
  create(data: ICreateConnectorDTO): Promise<Connector>;
  save(connector: Connector): Promise<Connector | undefined>;
  update(connector: Connector): Promise<Connector | undefined>;
  delete(connector: Connector): Promise<Connector | undefined>;
  findAllConnectors(filters?: IFindAllConnectorsDTO): Promise<Connector[]>;
}
