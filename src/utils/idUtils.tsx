import { v4 as uuid } from 'uuid';

 export const generateNumericId = (): string => {
    return uuid().slice(0, 12); // Ta bort icke-numeriska tecken och begränsa längden
  };