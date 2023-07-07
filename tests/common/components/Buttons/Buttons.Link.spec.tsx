import { render } from 'test-utils';

import { Buttons } from '~/common/components/Buttons';

describe('component.Buttons', () => {
  const href = '/example/link';

  describe('buttons.Link', () => {
    it('default', () => {
      expect.assertions(1);

      const { asFragment } = render(<Buttons.Link href={href} />);

      expect(asFragment()).toMatchSnapshot();
    });

    it('with text', () => {
      expect.assertions(1);
      const text = '<current-text>';

      const { getByText } = render(<Buttons.Link text={text} href={href} />);

      expect(getByText(text)).toBeDefined();
    });

    it('with children', () => {
      expect.assertions(1);

      const text = '<current-children>';

      const { getByText } = render(
        <Buttons.Link href={href}>{text}</Buttons.Link>
      );

      expect(getByText(text)).toBeDefined();
    });
  });
});
