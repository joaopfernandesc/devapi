import * as mongoose from 'mongoose';
import IConnector from '../interfaces/IConnector';

const { Schema } = mongoose;

const ConnectorSchema = new Schema({
  name: String,
  type: { type: String, enum: ['REST', 'BD', 'SOAP'] },
  privacy: { type: String, enum: ['PUBLIC', 'PRIVATE'] },
  baseUrl: {
    type: String,
    match: /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi,
  },
  logoUrl: {
    type: String,
    match: /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi,
  },
  category: String,
  description: String,
  status: String,
  deletedAt: Date,
});

export default mongoose.model<IConnector>('Connector', ConnectorSchema);
