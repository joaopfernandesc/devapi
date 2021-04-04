import { Privacy, Type } from '../infra/typeorm/entities/Connector';

export default interface IUpdateConnectorDTO {
  name: string;
  type: Type;
  privacy: Privacy;
  baseUrl: string;
  logoUrl: string;
  category: string;
  description: string;
  status: string;
}
