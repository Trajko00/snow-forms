import { IField, Fields, FlattenedField } from '@snow-forms/types';
import { findItem } from './findItem';

export const buildTree = (flattenedItems: FlattenedField[]): Fields => {
  const root: IField = { id: 'root', children: [], name: 'root', type: 'div' };
  const nodes: Record<string, IField> = { [root.id]: root };
  const items = flattenedItems.map((item) => ({ ...item, children: [] }));

  for (const item of items) {
    const { id, children, name, type } = item;
    const parentId = item.parentId ?? root.id;
    const parent = nodes[parentId] ?? findItem(items, parentId);

    nodes[id] = { id, children, name, type };
    parent.children.push(item);
  }

  return root.children;
};
