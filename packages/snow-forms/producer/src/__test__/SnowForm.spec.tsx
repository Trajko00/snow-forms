import { render } from '@testing-library/react';

describe('SnowForm Component', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SnowFormsConsumer />);
    expect(baseElement).toBeTruthy();
  });
});
