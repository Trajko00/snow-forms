import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {
  SnowForm,
  SnowFormInput,
  SubmitButton,
  SnowFormSelect,
  FormField,
} from '@snow-forms/producer';
import {
  IField,
  Fields,
  SensorContext,
  FlattenedField,
} from '@snow-forms/types';
import {
  buildTree,
  flatten,
  flattenTree,
  getChildCount,
  getProjection,
  initialItems,
  removeChildrenOf,
  removeItem,
  setProperty,
} from './utils';
import { sortableTreeKeyboardCoordinates } from './keyboardCoordinates';
import {
  Announcements,
  closestCenter,
  defaultDropAnimation,
  DndContext,
  DragEndEvent,
  DragMoveEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  KeyboardSensor,
  MeasuringStrategy,
  Modifier,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import { SortableTreeItem } from './components';

interface useSnowFormProps {
  collapsible?: boolean;
  defaultItems?: Fields;
  indentationWidth?: number;
  indicator?: boolean;
  removable?: boolean;
}

const dropAnimation: DropAnimation = {
  ...defaultDropAnimation,
  dragSourceOpacity: 0.5,
};

const adjustTranslate: Modifier = ({ transform }) => {
  return {
    ...transform,
    y: transform.y - 25,
  };
};

export const useSnowForm = ({
  collapsible,
  defaultItems = initialItems,
  indicator,
  indentationWidth = 50,
  removable,
}: any) => {
  // const methods = useForm<{ name: string }>();

  const [memes, setMemes] = React.useState<IField[]>(() => defaultItems);
  // const [activeId, setActiveId] = React.useState<string | null>(null);
  // const [overId, setOverId] = React.useState<string | null>(null);
  // const [offsetLeft, setOffsetLeft] = React.useState(0);
  // const [currentPosition, setCurrentPosition] = React.useState<{
  //   parentId: string | null;
  //   overId: string;
  // } | null>(null);

  // const flattenedItems = React.useMemo(() => {
  //   const flattenedTree = flattenTree(fields);
  //   const collapsedItems = flattenedTree.reduce<string[]>(
  //     (acc, { children, collapsed, id }) =>
  //       collapsed && children.length ? [...acc, id] : acc,
  //     []
  //   );

  //   return removeChildrenOf(
  //     flattenedTree,
  //     activeId ? [activeId, ...collapsedItems] : collapsedItems
  //   );
  // }, [activeId, fields]);

  // const measuring = {
  //   droppable: {
  //     strategy: MeasuringStrategy.Always,
  //   },
  // };

  // const projected =
  //   activeId && overId
  //     ? getProjection(
  //         flattenedItems,
  //         activeId,
  //         overId,
  //         offsetLeft,
  //         indentationWidth
  //       )
  //     : null;
  // const sensorContext: SensorContext = React.useRef({
  //   items: flattenedItems,
  //   offset: offsetLeft,
  // });
  // const [coordinateGetter] = React.useState(() =>
  //   sortableTreeKeyboardCoordinates(sensorContext, indentationWidth)
  // );

  // const sensors = useSensors(
  //   useSensor(PointerSensor),
  //   useSensor(KeyboardSensor, {
  //     coordinateGetter,
  //   })
  // );

  // const sortedIds = React.useMemo(
  //   () => flattenedItems.map(({ id }) => id),
  //   [flattenedItems]
  // );
  // const activeItem = activeId
  //   ? flattenedItems.find(({ id }) => id === activeId)
  //   : null;

  // React.useEffect(() => {
  //   sensorContext.current = {
  //     items: flattenedItems,
  //     offset: offsetLeft,
  //   };
  // }, [flattenedItems, offsetLeft]);

  // const announcements: Announcements = {
  //   onDragStart(id) {
  //     return `Picked up ${id}.`;
  //   },
  //   onDragMove(id, overId) {
  //     return getMovementAnnouncement('onDragMove', id, overId);
  //   },
  //   onDragOver(id, overId) {
  //     return getMovementAnnouncement('onDragOver', id, overId);
  //   },
  //   onDragEnd(id, overId) {
  //     return getMovementAnnouncement('onDragEnd', id, overId);
  //   },
  //   onDragCancel(id) {
  //     return `Moving was cancelled. ${id} was dropped in its original position.`;
  //   },
  // };

  // const SortableForm = ({
  //   collapsible,
  //   defaultItems = initialItems,
  //   indicator,
  //   indentationWidth = 50,
  //   removable,
  // }: useSnowFormProps) => {
  //   return (
  //     <>
  //       <DndContext
  //         announcements={announcements}
  //         sensors={sensors}
  //         collisionDetection={closestCenter}
  //         measuring={measuring}
  //         onDragStart={handleDragStart}
  //         onDragMove={handleDragMove}
  //         onDragOver={handleDragOver}
  //         onDragEnd={handleDragEnd}
  //         onDragCancel={handleDragCancel}
  //       >
  //         <SortableContext
  //           items={sortedIds}
  //           strategy={verticalListSortingStrategy}
  //         >
  //           {flattenedItems.map(({ id, children, collapsed, depth }) => (
  //             <SortableTreeItem
  //               key={id}
  //               id={id}
  //               value={id}
  //               depth={id === activeId && projected ? projected.depth : depth}
  //               indentationWidth={indentationWidth}
  //               indicator={indicator}
  //               collapsed={Boolean(collapsed && children.length)}
  //               onCollapse={
  //                 collapsible && children.length
  //                   ? () => handleCollapse(id)
  //                   : undefined
  //               }
  //               onRemove={removable ? () => handleRemove(id) : undefined}
  //             />
  //           ))}
  //           {createPortal(
  //             <DragOverlay
  //               dropAnimation={dropAnimation}
  //               modifiers={indicator ? [adjustTranslate] : undefined}
  //             >
  //               {activeId && activeItem ? (
  //                 <SortableTreeItem
  //                   id={activeId}
  //                   depth={activeItem.depth}
  //                   clone
  //                   childCount={getChildCount(fields, activeId) + 1}
  //                   value={activeId}
  //                   indentationWidth={indentationWidth}
  //                 />
  //               ) : null}
  //             </DragOverlay>,
  //             document.body
  //           )}
  //         </SortableContext>
  //       </DndContext>
  //     </>
  //   );
  // };

  // function handleDragStart({ active: { id: activeId } }: DragStartEvent) {
  //   setActiveId(activeId);
  //   setOverId(activeId);

  //   const activeItem = flattenedItems.find(({ id }) => id === activeId);

  //   if (activeItem) {
  //     setCurrentPosition({
  //       parentId: activeItem.parentId!,
  //       overId: activeId,
  //     });
  //   }

  //   document.body.style.setProperty('cursor', 'grabbing');
  // }

  // function handleDragMove({ delta }: DragMoveEvent) {
  //   setOffsetLeft(delta.x);
  // }

  // function handleDragOver({ over }: DragOverEvent) {
  //   setOverId(over?.id ?? null);
  // }

  // function resetState() {
  //   setOverId(null);
  //   setActiveId(null);
  //   setOffsetLeft(0);
  //   setCurrentPosition(null);

  //   document.body.style.setProperty('cursor', '');
  // }

  // function handleDragEnd({ active, over }: DragEndEvent) {
  //   resetState();

  //   if (projected && over) {
  //     const { depth, parentId } = projected;
  //     const clonedItems: FlattenedField[] = JSON.parse(
  //       JSON.stringify(flattenTree(fields))
  //     );
  //     const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
  //     const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);
  //     const activeTreeItem = clonedItems[activeIndex];

  //     //@ts-ignore
  //     clonedItems[activeIndex] = { ...activeTreeItem, depth, parentId };

  //     const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);
  //     const newItems = buildTree(sortedItems);

  //     setFields(newItems);
  //   }
  // }

  // function handleDragCancel() {
  //   resetState();
  // }

  // function handleRemove(id: string) {
  //   setFields((items) => removeItem(items, id));
  // }

  // function handleCollapse(id: string) {
  //   setFields((items) =>
  //     setProperty(items, id, 'collapsed', (value) => {
  //       return !value;
  //     })
  //   );
  // }

  // function getMovementAnnouncement(
  //   eventName: string,
  //   activeId: string,
  //   overId?: string
  // ) {
  //   if (overId && projected) {
  //     if (eventName !== 'onDragEnd') {
  //       if (
  //         currentPosition &&
  //         projected.parentId === currentPosition.parentId &&
  //         overId === currentPosition.overId
  //       ) {
  //         return;
  //       } else {
  //         setCurrentPosition({
  //           parentId: projected.parentId as string | null,
  //           overId,
  //         });
  //       }
  //     }

  //     const clonedItems: FlattenedField[] = JSON.parse(
  //       JSON.stringify(flattenTree(fields))
  //     );
  //     const overIndex = clonedItems.findIndex(({ id }) => id === overId);
  //     const activeIndex = clonedItems.findIndex(({ id }) => id === activeId);
  //     const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);

  //     const previousItem = sortedItems[overIndex - 1];

  //     let announcement;
  //     const movedVerb = eventName === 'onDragEnd' ? 'dropped' : 'moved';
  //     const nestedVerb = eventName === 'onDragEnd' ? 'dropped' : 'nested';

  //     if (!previousItem) {
  //       const nextItem = sortedItems[overIndex + 1];
  //       announcement = `${activeId} was ${movedVerb} before ${nextItem.id}.`;
  //     } else {
  //       if (projected.depth > previousItem.depth) {
  //         announcement = `${activeId} was ${nestedVerb} under ${previousItem.id}.`;
  //       } else {
  //         let previousSibling: FlattenedField | undefined = previousItem;
  //         while (previousSibling && projected.depth < previousSibling.depth) {
  //           const parentId: string | null = previousSibling.parentId as
  //             | string
  //             | null;
  //           previousSibling = sortedItems.find(({ id }) => id === parentId);
  //         }

  //         if (previousSibling) {
  //           announcement = `${activeId} was ${movedVerb} after ${previousSibling.id}.`;
  //         }
  //       }
  //     }

  //     return announcement;
  //   }

  //   return;
  // }

  // const onSubmit = (e: any) =>
  //   setFields((prev) => {
  //     if (!prev) return [e];
  //     return [...prev, {id: e.target}];
  //   });

  const onSubmit = (e: any) => console.log(e);
  // const onSubmit = (e: any) => {
  //   setFields((prev) => {
  //     if (!prev) {
  //       return [
  //         {
  //           name: e.name,
  //           type: e.type,
  //           id: e.name,
  //           parentId: null,
  //           children: [],
  //         },
  //       ];
  //     }
  //     return [
  //       ...prev,
  //       {
  //         name: e.name,
  //         type: e.type,
  //         id: e.name,
  //         parentId: null,
  //         children: [],
  //       },
  //     ];
  //   });
  // };

  React.useEffect(() => {
    console.log(memes);
  }, [memes]);

  // const connectForm = { methods, FormProvider, onSubmit };
  // const ConnectedForm = <form {...connectForm}></form>;

  return {
    // connectForm,
    SnowForm,
    SnowFormInput,
    SnowFormSelect,
    SubmitButton,
    // fields,
    // setFields,
    FormField,
    // ConnectedForm,
  };
};

export const SortableForm2 = ({
  collapsible,
  defaultItems = initialItems,
  indicator,
  indentationWidth = 50,
  removable,
}: useSnowFormProps) => {
  const [fields, setFields] = React.useState<IField[]>(() => defaultItems);
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [overId, setOverId] = React.useState<string | null>(null);
  const [offsetLeft, setOffsetLeft] = React.useState(0);
  const [currentPosition, setCurrentPosition] = React.useState<{
    parentId: string | null;
    overId: string;
  } | null>(null);

  const flattenedItems = React.useMemo(() => {
    const flattenedTree = flattenTree(fields);
    const collapsedItems = flattenedTree.reduce<string[]>(
      (acc, { children, collapsed, id }) =>
        collapsed && children.length ? [...acc, id] : acc,
      []
    );

    return removeChildrenOf(
      flattenedTree,
      activeId ? [activeId, ...collapsedItems] : collapsedItems
    );
  }, [activeId, fields]);

  const measuring = {
    droppable: {
      strategy: MeasuringStrategy.Always,
    },
  };

  React.useEffect(() => {
    return console.log(fields);
  }, [fields]);

  const projected =
    activeId && overId
      ? getProjection(
          flattenedItems,
          activeId,
          overId,
          offsetLeft,
          indentationWidth
        )
      : null;
  const sensorContext: SensorContext = React.useRef({
    items: flattenedItems,
    offset: offsetLeft,
  });
  const [coordinateGetter] = React.useState(() =>
    sortableTreeKeyboardCoordinates(sensorContext, indentationWidth)
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter,
    })
  );

  const sortedIds = React.useMemo(
    () => flattenedItems.map(({ id }) => id),
    [flattenedItems]
  );
  const activeItem = activeId
    ? flattenedItems.find(({ id }) => id === activeId)
    : null;

  React.useEffect(() => {
    sensorContext.current = {
      items: flattenedItems,
      offset: offsetLeft,
    };
  }, [flattenedItems, offsetLeft]);

  const announcements: Announcements = {
    onDragStart(id) {
      return `Picked up ${id}.`;
    },
    onDragMove(id, overId) {
      return getMovementAnnouncement('onDragMove', id, overId);
    },
    onDragOver(id, overId) {
      return getMovementAnnouncement('onDragOver', id, overId);
    },
    onDragEnd(id, overId) {
      return getMovementAnnouncement('onDragEnd', id, overId);
    },
    onDragCancel(id) {
      return `Moving was cancelled. ${id} was dropped in its original position.`;
    },
  };

  // const SortableForm = ({
  //   collapsible,
  //   defaultItems = initialItems,
  //   indicator,
  //   indentationWidth = 50,
  //   removable,
  // }: useSnowFormProps) => {
  return (
    <>
      <DndContext
        announcements={announcements}
        sensors={sensors}
        collisionDetection={closestCenter}
        measuring={measuring}
        onDragStart={handleDragStart}
        onDragMove={handleDragMove}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext
          items={sortedIds}
          strategy={verticalListSortingStrategy}
        >
          {flattenedItems.map(({ id, children, collapsed, depth }) => (
            <SortableTreeItem
              key={id}
              id={id}
              value={id}
              depth={id === activeId && projected ? projected.depth : depth}
              indentationWidth={indentationWidth}
              indicator={indicator}
              collapsed={Boolean(collapsed && children.length)}
              onCollapse={
                collapsible && children.length
                  ? () => handleCollapse(id)
                  : undefined
              }
              onRemove={removable ? () => handleRemove(id) : undefined}
            />
          ))}
          {createPortal(
            <DragOverlay
              dropAnimation={dropAnimation}
              modifiers={indicator ? [adjustTranslate] : undefined}
            >
              {activeId && activeItem ? (
                <SortableTreeItem
                  id={activeId}
                  depth={activeItem.depth}
                  clone
                  childCount={getChildCount(fields, activeId) + 1}
                  value={activeId}
                  indentationWidth={indentationWidth}
                />
              ) : null}
            </DragOverlay>,
            document.body
          )}
        </SortableContext>
      </DndContext>
    </>
  );

  function handleDragStart({ active: { id: activeId } }: DragStartEvent) {
    setActiveId(activeId);
    setOverId(activeId);

    const activeItem = flattenedItems.find(({ id }) => id === activeId);

    if (activeItem) {
      setCurrentPosition({
        parentId: activeItem.parentId!,
        overId: activeId,
      });
    }

    document.body.style.setProperty('cursor', 'grabbing');
  }

  function handleDragMove({ delta }: DragMoveEvent) {
    setOffsetLeft(delta.x);
  }

  function handleDragOver({ over }: DragOverEvent) {
    setOverId(over?.id ?? null);
  }

  function resetState() {
    setOverId(null);
    setActiveId(null);
    setOffsetLeft(0);
    setCurrentPosition(null);

    document.body.style.setProperty('cursor', '');
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    resetState();

    if (projected && over) {
      const { depth, parentId } = projected;
      const clonedItems: FlattenedField[] = JSON.parse(
        JSON.stringify(flattenTree(fields))
      );
      const overIndex = clonedItems.findIndex(({ id }) => id === over.id);
      const activeIndex = clonedItems.findIndex(({ id }) => id === active.id);
      const activeTreeItem = clonedItems[activeIndex];

      clonedItems[activeIndex] = { ...activeTreeItem, depth, parentId };

      const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);
      const newItems = buildTree(sortedItems);

      setFields(newItems);
    }
  }

  function handleDragCancel() {
    resetState();
  }

  function handleRemove(id: string) {
    setFields((items) => removeItem(items, id));
  }

  function handleCollapse(id: string) {
    setFields((items) => {
      return setProperty(items, id, 'collapsed', (value) => {
        // handleRemove();
        return !value;
      });
    });
  }

  function getMovementAnnouncement(
    eventName: string,
    activeId: string,
    overId?: string
  ) {
    if (overId && projected) {
      if (eventName !== 'onDragEnd') {
        if (
          currentPosition &&
          projected.parentId === currentPosition.parentId &&
          overId === currentPosition.overId
        ) {
          return;
        } else {
          setCurrentPosition({
            parentId: projected.parentId as string | null,
            overId,
          });
        }
      }

      const clonedItems: FlattenedField[] = JSON.parse(
        JSON.stringify(flattenTree(fields))
      );
      const overIndex = clonedItems.findIndex(({ id }) => id === overId);
      const activeIndex = clonedItems.findIndex(({ id }) => id === activeId);
      const sortedItems = arrayMove(clonedItems, activeIndex, overIndex);

      const previousItem = sortedItems[overIndex - 1];

      let announcement;
      const movedVerb = eventName === 'onDragEnd' ? 'dropped' : 'moved';
      const nestedVerb = eventName === 'onDragEnd' ? 'dropped' : 'nested';

      if (!previousItem) {
        const nextItem = sortedItems[overIndex + 1];
        announcement = `${activeId} was ${movedVerb} before ${nextItem.id}.`;
      } else {
        if (projected.depth > previousItem.depth) {
          announcement = `${activeId} was ${nestedVerb} under ${previousItem.id}.`;
        } else {
          let previousSibling: FlattenedField | undefined = previousItem;
          while (previousSibling && projected.depth < previousSibling.depth) {
            const parentId: string | null = previousSibling.parentId as
              | string
              | null;
            previousSibling = sortedItems.find(({ id }) => id === parentId);
          }

          if (previousSibling) {
            announcement = `${activeId} was ${movedVerb} after ${previousSibling.id}.`;
          }
        }
      }

      return announcement;
    }

    return;
  }
};
