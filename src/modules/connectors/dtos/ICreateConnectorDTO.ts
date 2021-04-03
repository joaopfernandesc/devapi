import IConnector from '../infra/mongoose/interfaces/IConnector';

export default interface ICreateConnectorDTO {
  name: IConnector['name'];
  type: IConnector['type'];
  privacy: IConnector['privacy'];
  baseUrl: IConnector['baseUrl'];
  logoUrl: IConnector['logoUrl'];
  category: IConnector['category'];
  description: IConnector['description'];
  status: IConnector['status'];
}
