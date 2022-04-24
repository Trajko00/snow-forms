import React from 'react';
import { BaseComponentProps, IField } from '@snow-forms/types';

export interface FormFieldProps extends BaseComponentProps {
  field: IField;
}

export const FormField = (props: FormFieldProps) => {
  return (
    <div
      style={{ margin: '15px', padding: '15px', fontSize: '10px' }}
      key={props.key}
    >
      <h3>{props.field.name}</h3>
      <h3>{props.field.type}</h3>
    </div>
  );
};
