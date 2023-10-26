import { render } from 'test-utils';

import { Buttons } from '~/common/components/Buttons';

describe('component.Buttons', () => {
  describe('buttons.Back', () => {
    it('default', () => {
      expect.assertions(2);

      const { asFragment, getByText } = render(<Buttons.Back />);

      expect(asFragment()).toMatchSnapshot();
      expect(getByText('translations.words.back')).toBeDefined();
    });

    it('with text', () => {
      expect.assertions(1);
      const text = '<current-text>';

      const { getByText } = render(<Buttons.Back text={text} />);

      expect(getByText(text)).toBeDefined();
    });

    it('with children', () => {
      expect.assertions(1);

      const text = '<current-children>';

      const { getByText } = render(<Buttons.Back>{text}</Buttons.Back>);

      expect(getByText(text)).toBeDefined();
    });
  });
});
