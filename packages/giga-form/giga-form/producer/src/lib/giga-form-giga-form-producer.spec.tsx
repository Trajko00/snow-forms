import { render } from '@testing-library/react';

import GigaFormGigaFormProducer from './giga-form-giga-form-producer';

describe('GigaFormGigaFormProducer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GigaFormGigaFormProducer />);
    expect(baseElement).toBeTruthy();
  });
});
