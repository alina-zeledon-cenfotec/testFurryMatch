import { Sex } from 'app/entities/enumerations/sex.model';

import { ISearchCriteria, NewSearchCriteria } from './search-criteria.model';

export const sampleWithRequiredData: ISearchCriteria = {
  id: 64881,
  filterType: 'deposit Arkansas',
  breed: 'collaborative navigate capacitor',
  tradePups: 'haptic',
  sex: Sex['Hembra'],
};

export const sampleWithPartialData: ISearchCriteria = {
  id: 53295,
  filterType: 'Berkshire firmware 24/7',
  breed: 'Future optimal',
  tradePups: 'Open-source haptic',
  sex: Sex['Hembra'],
  pedigree: 'Sleek Small upward-trending',
  tradeMoney: 'Berkshire Engineer Gorgeous',
  provice: 'relationships feed',
  district: 'program',
  objective: 'Pizza',
};

export const sampleWithFullData: ISearchCriteria = {
  id: 66144,
  filterType: 'Beauty Idaho',
  breed: 'input bypassing orange',
  tradePups: 'calculate',
  sex: Sex['Macho'],
  pedigree: 'Jewelery Central',
  tradeMoney: 'multi-byte',
  provice: 'Isle Diverse Chair',
  canton: 'Personal Computers International',
  district: 'Refined Qatari',
  objective: 'Mobility Naira Paraguay',
};

export const sampleWithNewData: NewSearchCriteria = {
  filterType: 'Awesome Product cross-platform',
  breed: 'Sleek leading-edge Associate',
  tradePups: 'black',
  sex: Sex['Macho'],
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
