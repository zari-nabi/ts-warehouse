export interface Units {
  id: string;
  name: string;
  code: string;
  familyCode: string;
  economicCode: string;
  registerationNumber: string;
  cellNumber: string;
  telNumber: string;
  zipCode: string;
  address: string;
  fax: string;
  website: string;
  contractId: string;
  geoNameId: string;
  parentId: string;
  isActive: string;
  isAlive: string;
}
export interface StoreTable {
  count: string;
  message: string;
  status: string;
  units: Units[];
}
