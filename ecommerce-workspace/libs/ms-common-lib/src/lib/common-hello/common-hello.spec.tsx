import { render } from '@testing-library/react';

import CommonHello from './common-hello';

describe('CommonHello', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CommonHello />);
    expect(baseElement).toBeTruthy();
  });
});
