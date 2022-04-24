import { render } from '@testing-library/react';

import SnowFormsModuleProducer from './snow-forms-module-producer';

describe('SnowFormsModuleProducer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SnowFormsModuleProducer />);
    expect(baseElement).toBeTruthy();
  });
});
