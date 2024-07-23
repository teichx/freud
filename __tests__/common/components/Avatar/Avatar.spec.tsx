import { render } from 'test-utils';

import { Avatar } from '~/common/components/Avatar';

describe('component.Avatar', () => {
  it('renders with width and height', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <Avatar src='http://great-url.com' alt='Great alt' w={40} h={40} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders without width and height', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <Avatar src='http://great-url.com' alt='Other alt' w={0} h={0} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
