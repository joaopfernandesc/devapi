import ICreateConnectorDTO from '@modules/connectors/dtos/ICreateConnectorDTO';
import IFindAllConnectorsDTO from '@modules/connectors/dtos/IFindAllConnectorsDTO';
import IConnector from '@modules/connectors/infra/mongoose/interfaces/IConnector';

export default interface IConnectorsRepository {
  create(data: ICreateConnectorDTO): Promise<IConnector>;
  save(connector: IConnector): Promise<IConnector | undefined>;
  delete(connector: IConnector): Promise<IConnector | undefined>;
  findAllConnectors(data?: IFindAllConnectorsDTO): Promise<IConnector[]>;
}
