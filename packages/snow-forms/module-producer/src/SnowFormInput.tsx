import { BaseComponentProps } from '@snow-forms/types';
import React from 'react';
import { useFormContext } from 'react-hook-form';

export type SnowInputRef = HTMLInputElement;
export interface SnowFormInputProps extends BaseComponentProps {
  placeholder?: string;
}

export const SnowFormInput = (props: SnowFormInputProps): JSX.Element => {
  const { register } = useFormContext();

  return <input {...props} {...register('name')} />;
};
