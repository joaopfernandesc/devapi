export default interface ICreateConnectorDTO {
  name: string;
  type: 'REST' | 'BD' | 'SOAP';
  privacy: 'PUBLIC' | 'PRIVATE';
  baseUrl: string;
  logoUrl: string;
  category: string;
  description: string;
  status: string;
}
