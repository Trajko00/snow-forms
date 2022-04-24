import React, { MutableRefObject } from 'react';

export type SomeProps = {
  name: string;
};

export type MaybeRenderProp<P> =
  | React.ReactNode
  | ((props: P) => React.ReactNode);

export interface CreateContextOptions {
  /**
   * If `true`, React will throw if context is `null` or `undefined`
   * In some cases, you might want to support nested context, so you can set it to `false`
   */
  strict?: boolean;
  /**
   * Error message to throw if the context is `undefined`
   */
  errorMessage?: string;
  /**
   * The display name of the context
   */
  name?: string;
}

export type ElementsMix = HtmlTag & string;
export type ElementsUnion = PartialUnion<ElementsMix>;

export type UseGeneric<
  TGenerics extends PartialGenerics,
  TGeneric extends keyof PartialGenerics
> = TGeneric extends 'LoaderData' | 'Search'
  ? Partial<Maybe<TGenerics[TGeneric], DefaultGenerics[TGeneric]>>
  : Maybe<TGenerics[TGeneric], DefaultGenerics[TGeneric]>;

export type AsyncElement = (opts: any) => Promise<React.ReactNode>;

export type Search<T> = Record<string, T>;
export type Params<T> = Record<string, T>;
export type LoaderData<T> = Record<string, T>;
export type RouteMeta<T> = Record<string, T>;

export type Maybe<T, TUnknown> = T extends {} ? T : TUnknown;

export type DefaultGenerics = {
  LoaderData: LoaderData<unknown>;
  Params: Params<string>;
  Search: Search<unknown>;
  RouteMeta: RouteMeta<unknown>;
};

export type PartialGenerics = Partial<DefaultGenerics>;

export type MakeGenerics<TGenerics extends PartialGenerics> = TGenerics;

export type SyncOrAsyncElement = React.Component;

// export type FormComponents<J> = {
//   input: SyncOrAsyncElement<Pick<J,input>>;
// };

export type FormElemts = Record<HtmlTag, SyncOrAsyncElement>;

export type CreateContextReturn<T> = [
  React.Provider<T>,
  () => T,
  React.Context<T>
];

export type UnionToIntersection<U> = (
  U extends any ? (k: U) => void : never
) extends (k: infer I) => void
  ? I
  : never;

export type PartialUnion<T> = UnionToIntersection<
  T extends any ? Partial<T> : never
>;

export type FormComponent = {
  id: string;
  index: number;
  children: FormComponent[];
  htmlTag: HtmlTag;
  label?: string;
  parentId?: string;
  condition: any;
  validation?: Validation;
};

export interface IField {
  name: string;
  type: string;
  id: string;
  collapsed?: boolean;
  children: IField[];
}

export type Fields = IField[];

export interface FlattenedField extends IField {
  parentId: string | undefined | null;
  depth: number;
  index: number;
}
export type SensorContext = MutableRefObject<{
  items: FlattenedField[];
  offset: number;
}>;

export type ValidationOpts = {
  required: boolean;
  min: number;
  max: number;
  minLength: number;
  maxLength: number;
};

export type Validation = Partial<ValidationOpts>;

export type HtmlTag = 'input' | 'select' | 'checkbox' | 'radio';

export type FieldValue = 'number' | 'string' | 'date';

export interface SnowFormProps extends useSnowFormProps {
  children: MaybeRenderProp<any>;
  ref?: React.RefObject<any>;
}

export type SnowFormContextProps = {
  defaultFields?: FormComponent[];
  elements: FormElemts;
  children: MaybeRenderProp<any>;
  ref?: React.RefObject<any>;
};
export type useSnowFormProps = Partial<SnowFormContextProps>;

export type fields =
  | 'password'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'number'
  | 'textarea'
  | 'email'
  | 'url'
  | 'day'
  | 'date-time';

export type fieldTypes = fields[];

type defaultValidationOptions = {
  required: boolean;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
};

export type makerForm = {
  name: string;
  type: fieldTypes;
  validation: defaultValidationOptions;
};

export interface BaseComponentProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  key?: React.Key | null | undefined;
}
