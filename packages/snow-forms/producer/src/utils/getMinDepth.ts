import { FlattenedField } from '@snow-forms/types';

export const getMinDepth = ({ nextItem }: { nextItem: FlattenedField }) => {
  if (nextItem) {
    return nextItem.depth;
  }

  return 0;
};
