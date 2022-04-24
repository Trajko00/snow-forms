import { IField } from '@snow-forms/types';

export const findItem = (items: IField[], itemId: string) => {
  return items.find(({ id }) => id === itemId);
};
