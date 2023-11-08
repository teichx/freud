import { render } from 'test-utils';

import { Logo, LogoSizes, LogoVariants } from '~/common/components/Logo';

describe('component.Logo', () => {
  const sizes: LogoSizes[] = ['small', 'medium', 'large'];
  const variants: LogoVariants[] = ['icon', 'full'];

  const combinations = sizes
    .map((x) => variants.map<[LogoSizes, LogoVariants]>((y) => [x, y]))
    .reduce((acc, current) => [...acc, ...current], []);

  combinations.forEach(([size, variant]) => {
    it(`renders size ${size} variant ${variant}`, () => {
      expect.assertions(1);

      const { asFragment } = render(<Logo size={size} variant={variant} />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
