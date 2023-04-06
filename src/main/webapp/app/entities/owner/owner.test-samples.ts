import dayjs from 'dayjs/esm';

import { IOwner, NewOwner } from './owner.model';

export const sampleWithRequiredData: IOwner = {
  id: 70414,
  firstName: 'Manley',
  firstLastName: 'syndicate',
  secondLastName: 'Markets compressing',
  phoneNumber: 11916,
  identityNumber: 'FTP GB',
  adress: 'Kids',
  province: 'Estonia',
  canton: 'Human convergence',
  district: 'analyzing Loan',
  email: 'Dante.Fritsch@gmail.com',
  userPassword: 'project',
  otp: 'Checking portals FTP',
};

export const sampleWithPartialData: IOwner = {
  id: 6164,
  firstName: 'Earline',
  firstLastName: 'Alaska Zloty Honduras',
  secondLastName: 'Cambridgeshire Bedfordshire transmitter',
  phoneNumber: 363,
  identityNumber: 'Networked',
  adress: 'Music SMS system',
  province: 'Investor maroon Gorgeous',
  canton: 'Infrastructure Kina Slovakia',
  district: 'bypass Investment radical',
  email: 'Declan_Lind97@hotmail.com',
  userPassword: 'invoice',
  otp: 'Avon Solutions',
  createdAt: dayjs('2023-04-06'),
};

export const sampleWithFullData: IOwner = {
  id: 82941,
  firstName: 'Chase',
  secondName: 'generate',
  firstLastName: 'Product index',
  secondLastName: 'Account South Generic',
  phoneNumber: 80127,
  photo: 'facilitate New',
  identityNumber: 'ubiquitous',
  adress: 'cross-platform',
  province: 'Cheese',
  canton: 'Barbados matrix Granite',
  district: 'Arab Inlet',
  email: 'Sienna_Muller72@hotmail.com',
  userPassword: 'eyeballs',
  otp: 'optical Motorway quantifying',
  createdAt: dayjs('2023-04-06'),
  updatedAt: dayjs('2023-04-06'),
};

export const sampleWithNewData: NewOwner = {
  firstName: 'Frieda',
  firstLastName: 'haptic UIC-Franc programming',
  secondLastName: 'Fuerte Plains',
  phoneNumber: 22600,
  identityNumber: 'best-of-breed sensor Concrete',
  adress: 'Cotton Riyal Outdoors',
  province: 'circuit',
  canton: 'override Wooden Ball',
  district: 'Division Direct',
  email: 'Hank_Graham@hotmail.com',
  userPassword: 'optical',
  otp: 'AI pink AGP',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
