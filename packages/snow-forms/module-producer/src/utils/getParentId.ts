// export const getParentId = () => {
//   if (depth === 0 || !previousItem) {
//     return null;
//   }

//   if (depth === previousItem.depth) {
//     return previousItem.parentId;
//   }

//   if (depth > previousItem.depth) {
//     return previousItem.id;
//   }

//   const newParent = newItems
//     .slice(0, overItemIndex)
//     .reverse()
//     .find((item) => item.depth === depth)?.parentId;

//   return newParent ?? null;
// }
