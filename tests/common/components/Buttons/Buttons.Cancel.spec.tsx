import { render } from 'test-utils';

import { Buttons } from '~/common/components/Buttons';

describe('component.Buttons', () => {
  describe('buttons.Cancel', () => {
    it('default', () => {
      expect.assertions(2);

      const { asFragment, getByText } = render(<Buttons.Cancel />);

      expect(asFragment()).toMatchSnapshot();
      expect(getByText('translations.words.cancel')).toBeDefined();
    });

    it('with text', () => {
      expect.assertions(1);
      const text = '<current-text>';

      const { getByText } = render(<Buttons.Cancel text={text} />);

      expect(getByText(text)).toBeDefined();
    });

    it('with children', () => {
      expect.assertions(1);

      const text = '<current-children>';

      const { getByText } = render(<Buttons.Cancel>{text}</Buttons.Cancel>);

      expect(getByText(text)).toBeDefined();
    });
  });
});
