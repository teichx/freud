import { render } from 'test-utils';

import { Loader } from '~/common/components/Loader';

describe('component.Loader', () => {
  it('renders when isLoading is false', () => {
    expect.assertions(1);

    const { asFragment } = render(<Loader isLoading={false} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders when isLoading', () => {
    expect.assertions(1);

    const { asFragment } = render(<Loader isLoading />);

    expect(asFragment()).toMatchSnapshot();
  });
});
