/* eslint-disable-next-line */
import * as React from 'react';
export interface SnowFormInputProps {}

export const SnowFormInput = React.forwardRef<HTMLInputElement, any>(
  (props, ref) => {
    return <input ref={ref} {...props} />;
  }
);

SnowFormInput.displayName = 'SnowFormInput';
