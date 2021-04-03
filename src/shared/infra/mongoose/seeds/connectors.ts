import '@shared/infra/mongoose';
import ICreateConnectorDTO from '@modules/connectors/dtos/ICreateConnectorDTO';
import Connector from '@modules/connectors/infra/mongoose/models/Connector';

const data: ICreateConnectorDTO[] = [
  {
    name: 'PUBLIC REST',
    type: 'REST',
    privacy: 'PUBLIC',
    baseUrl: 'www.google.com',
    logoUrl: 'www.google.com/image',
    category: 'Antifraude',
    status: 'Ativo',
    description: 'Seed connector',
  },
  {
    name: 'PUBLIC SOAP',
    type: 'SOAP',
    privacy: 'PUBLIC',
    baseUrl: 'www.yahoo.com',
    logoUrl: 'www.yahoo.com/image',
    category: 'Armazenamento',
    status: 'Inativo',
    description: 'Seed connector',
  },
  {
    name: 'PUBLIC BD',
    type: 'BD',
    privacy: 'PUBLIC',
    baseUrl: 'www.outlook.com',
    logoUrl: 'www.outlook.com/image',
    category: 'Produtividade',
    status: 'Indefinido',
    description: 'Seed connector',
  },
  {
    name: 'PRIVATE REST',
    type: 'REST',
    privacy: 'PRIVATE',
    baseUrl: 'www.gmail.com',
    logoUrl: 'www.gmail.com/image',
    category: 'Email',
    status: 'Ativo',
    description: 'Seed connector',
  },
];

Connector.insertMany(data);
