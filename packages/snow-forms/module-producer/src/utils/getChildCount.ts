import { Fields } from '@snow-forms/types';
import { countChildren } from './countChildren';
import { findItemDeep } from './findItemDeep';

export const getChildCount = (items: Fields, id: string) => {
  if (!id) {
    return 0;
  }

  const item = findItemDeep(items, id);

  return item ? countChildren(item.children) : 0;
};
