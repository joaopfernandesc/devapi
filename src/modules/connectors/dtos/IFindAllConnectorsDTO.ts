import IConnector from '../infra/mongoose/interfaces/IConnector';

export default interface IFindAllConnectorsDTO {
  name: IConnector['name'];
  type: IConnector['type'];
  privacy: IConnector['privacy'];
  category: IConnector['category'];
}
