import { Fields, FlattenedField } from '@snow-forms/types';
import { flatten } from './flatten';

export const flattenTree = (items: Fields): FlattenedField[] => {
  return flatten(items);
};
