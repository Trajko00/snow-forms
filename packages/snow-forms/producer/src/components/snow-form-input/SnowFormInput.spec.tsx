import { render } from '@testing-library/react';

import { SnowFormInput } from './SnowFormInput';

describe('SnowFormInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SnowFormInput />);
    expect(baseElement).toBeTruthy();
  });
});
