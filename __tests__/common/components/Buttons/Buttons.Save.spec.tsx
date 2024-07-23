jest.mock('~/core/services/Loader/useLoader');
import { render } from 'test-utils';

import { Buttons } from '~/common/components/Buttons';
import * as services from '~/core/services/Loader/useLoader';

describe('component.Buttons', () => {
  describe('buttons.Save', () => {
    beforeEach(() => {
      jest.spyOn(services, 'useLoader').mockReturnValue({
        isLoading: false,
        setIsLoading: jest.fn(),
        startLoading: jest.fn(),
        endLoading: jest.fn(),
      });
    });

    it('default', () => {
      expect.assertions(2);

      const { asFragment, getByText } = render(<Buttons.Save />);

      expect(asFragment()).toMatchSnapshot();
      expect(getByText('components.buttons.save')).toBeDefined();
    });

    it('with text', () => {
      expect.assertions(1);
      const text = '<current-text>';

      const { getByText } = render(<Buttons.Save text={text} />);

      expect(getByText(text)).toBeDefined();
    });

    it('with children', () => {
      expect.assertions(1);

      const text = '<current-children>';

      const { getByText } = render(<Buttons.Save>{text}</Buttons.Save>);

      expect(getByText(text)).toBeDefined();
    });
  });

  describe('buttons.Save when isLoading', () => {
    it('default when isLoading is not equal not loading', () => {
      expect.assertions(1);
      jest.spyOn(services, 'useLoader').mockReturnValue({
        isLoading: false,
        setIsLoading: jest.fn(),
        startLoading: jest.fn(),
        endLoading: jest.fn(),
      });

      const { asFragment: firstAsFragment } = render(<Buttons.Save />);

      jest.spyOn(services, 'useLoader').mockReturnValue({
        isLoading: true,
        setIsLoading: jest.fn(),
        startLoading: jest.fn(),
        endLoading: jest.fn(),
      });

      const { asFragment: secondAsFragment } = render(<Buttons.Save />);

      expect(firstAsFragment()).not.toStrictEqual(secondAsFragment());
    });

    it('default when isLoading', () => {
      expect.assertions(2);
      jest.spyOn(services, 'useLoader').mockReturnValue({
        isLoading: true,
        setIsLoading: jest.fn(),
        startLoading: jest.fn(),
        endLoading: jest.fn(),
      });

      const { asFragment, getByText } = render(<Buttons.Save />);

      expect(asFragment()).toMatchSnapshot();
      expect(getByText('components.buttons.save')).toBeDefined();
    });
  });
});
