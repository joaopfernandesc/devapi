import {
  ConnectorPrivacy,
  ConnectorType,
} from '../infra/typeorm/entities/Connector';

export default interface IUpdateConnectorDTO {
  name: string;
  type: ConnectorType;
  privacy: ConnectorPrivacy;
  baseUrl: string;
  logoUrl: string;
  category: string;
  description: string;
  status: string;
}
