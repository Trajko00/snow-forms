import React from 'react';
import { BaseComponentProps } from '@snow-forms/types';
export interface SubmitButtonProps extends BaseComponentProps {
  label?: string;
}

export const SubmitButton = (props: SubmitButtonProps) => {
  return (
    <button {...props} type="submit">
      {props.label}
    </button>
  );
};
