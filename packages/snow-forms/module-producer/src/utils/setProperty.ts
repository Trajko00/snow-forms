import { Fields, IField } from '@snow-forms/types';

export function setProperty<T extends keyof IField>(
  items: Fields,
  id: string,
  property: T,
  setter: (value: IField[T]) => IField[T]
) {
  for (const item of items) {
    if (item.id === id) {
      item[property] = setter(item[property]);
      continue;
    }

    if (item.children.length) {
      item.children = setProperty(item.children, id, property, setter);
    }
  }

  return [...items];
}
