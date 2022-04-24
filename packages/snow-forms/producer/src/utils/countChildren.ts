import { IField } from '@snow-forms/types';

export const countChildren = (items: IField[], count = 0): number => {
  return items.reduce((acc, { children }) => {
    if (children.length) {
      return countChildren(children, acc + 1);
    }

    return acc + 1;
  }, count);
};
