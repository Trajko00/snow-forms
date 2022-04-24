import { Fields, IField, FlattenedField } from '@snow-forms/types';

export const flatten = (
  items: IField[],
  parentId: string | null = null,
  depth = 0
): FlattenedField[] => {
  //@ts-ignore
  return items.reduce<FlattenedField[]>((acc, item, index) => {
    return [
      ...acc,
      { ...item, parentId, depth, index },
      ...flatten(item.children, item.id, depth + 1),
    ];
  }, []);
};
