import { render } from '@testing-library/react';

import SnowFormsConsumer from './snow-forms-consumer';

describe('SnowFormsConsumer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SnowFormsConsumer />);
    expect(baseElement).toBeTruthy();
  });
});
