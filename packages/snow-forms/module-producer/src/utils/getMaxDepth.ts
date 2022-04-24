import { FlattenedField } from '@snow-forms/types';

export const getMaxDepth = ({
  previousItem,
}: {
  previousItem: FlattenedField;
}) => {
  if (previousItem) {
    return previousItem.depth + 1;
  }

  return 0;
};
