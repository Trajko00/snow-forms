import React from 'react';
import { BaseComponentProps } from '@snow-forms/types';
import { useFormContext } from 'react-hook-form';
import { Fields } from './lib/constants';

export interface SnowFormSelectProps extends BaseComponentProps {}

export const SnowFormSelect = (props: SnowFormSelectProps) => {
  const { register } = useFormContext();
  return (
    <select {...props} {...register('type')}>
      {Fields.map((value, index) => {
        return (
          <option key={index} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};
