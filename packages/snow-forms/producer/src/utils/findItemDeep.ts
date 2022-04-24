import { Fields, IField } from '@snow-forms/types';

export const findItemDeep = (
  items: Fields,
  itemId: string
): IField | undefined => {
  for (const item of items) {
    const { id, children } = item;

    if (id === itemId) {
      return item;
    }

    if (children.length) {
      const child = findItemDeep(children, itemId);

      if (child) {
        return child;
      }
    }
  }

  return undefined;
};
