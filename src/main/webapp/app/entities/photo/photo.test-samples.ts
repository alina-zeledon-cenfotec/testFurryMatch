import dayjs from 'dayjs/esm';

import { IPhoto, NewPhoto } from './photo.model';

export const sampleWithRequiredData: IPhoto = {
  id: 37945,
  uploadDate: dayjs('2023-04-06'),
  photoUrl: 'Islands capacitor',
};

export const sampleWithPartialData: IPhoto = {
  id: 24602,
  uploadDate: dayjs('2023-04-06'),
  photoUrl: 'Rubber Myanmar Agent',
};

export const sampleWithFullData: IPhoto = {
  id: 26456,
  uploadDate: dayjs('2023-04-06'),
  photoUrl: 'Bedfordshire redundant Ergonomic',
};

export const sampleWithNewData: NewPhoto = {
  uploadDate: dayjs('2023-04-06'),
  photoUrl: 'District Customer-focused Computer',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
