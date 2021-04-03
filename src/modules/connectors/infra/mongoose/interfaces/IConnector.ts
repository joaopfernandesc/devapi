import { Document } from 'mongoose';

export default interface IConnector extends Document {
  id: string;
  name: string;
  type: 'REST' | 'BD' | 'SOAP';
  privacy: 'PUBLIC' | 'PRIVATE';
  baseUrl: string;
  logoUrl: string;
  category: string;
  description: string;
  status: string;
  deletedAt: string;
}
