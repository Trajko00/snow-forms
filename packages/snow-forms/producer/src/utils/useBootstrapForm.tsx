import React from 'react';
import { FieldValues, FormProviderProps, UseFormReturn } from 'react-hook-form';

export type FormProvider = <
  TFieldValues extends FieldValues,
  TContext extends object = object
>(
  props: FormProviderProps<TFieldValues, TContext>
) => JSX.Element;

export type useBootstrapFormProps<T> = {
  FormProvider: FormProvider;
  methods: UseFormReturn<T, object>;
  onSubmit: (data: any) => any;
};

export const SnowForm = <T extends object>(
  props: useBootstrapFormProps<T> & { children?: React.ReactNode }
) => {
  // const SnowForm = React.forwardRef<
  //   any,
  //   { children: React.ReactNode; methods: UseFormReturn<T, object> }
  // >(() => {
  const { FormProvider, onSubmit, methods } = props;
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{props.children}</form>
    </FormProvider>
  );
  // });

  // return SnowForm;
};

// export const useBootstrapForm = <T,>(
//   FormProvider: FormProvider,
//   methods: UseFormReturn<T, object>,
//   onSubmit: (data: any) => any
// ) => {
//   const SnowForm = React.useMemo(
//     () => (props: useBootstrapFormProps<T> & { children?: React.ReactNode }) => {
//       return (
//         <FormProvider {...methods}>
//           <form onSubmit={methods.handleSubmit(onSubmit)}>
//             {props.children}
//             <button type="submit">SUBMIT</button>
//           </form>
//         </FormProvider>
//       );
//     },
//     []
//   );

//   return SnowForm.
// };
