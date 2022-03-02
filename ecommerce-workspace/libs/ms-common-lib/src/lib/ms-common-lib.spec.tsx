import { render } from '@testing-library/react';

import MsCommonLib from './ms-common-lib';

describe('MsCommonLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MsCommonLib />);
    expect(baseElement).toBeTruthy();
  });
});
