jest.mock('~/core/services/Loader/useLoader');
import { render } from 'test-utils';

import { Section } from '~/common/components/Section';
import * as services from '~/core/services/Loader/useLoader';

describe('component.Section', () => {
  beforeEach(() => {
    jest.spyOn(services, 'useLoader').mockReturnValue({
      isLoading: false,
      setIsLoading: jest.fn(),
      startLoading: jest.fn(),
      endLoading: jest.fn(),
    });
  });

  it('renders without label', () => {
    expect.assertions(1);

    const { asFragment } = render(<Section>one children</Section>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders not loading', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <Section label='<label>'>one children</Section>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders when loading', () => {
    expect.assertions(1);

    jest.spyOn(services, 'useLoader').mockReturnValue({
      isLoading: true,
      setIsLoading: jest.fn(),
      startLoading: jest.fn(),
      endLoading: jest.fn(),
    });

    const { asFragment } = render(
      <Section label='<label>'>one children</Section>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders when loading having disabled loading', () => {
    expect.assertions(1);

    jest.spyOn(services, 'useLoader').mockReturnValue({
      isLoading: true,
      setIsLoading: jest.fn(),
      startLoading: jest.fn(),
      endLoading: jest.fn(),
    });

    const { asFragment } = render(
      <Section label='<label>' disabledLoading>
        one children
      </Section>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('different when has disabledLoading', () => {
    expect.assertions(1);

    jest.spyOn(services, 'useLoader').mockReturnValue({
      isLoading: true,
      setIsLoading: jest.fn(),
      startLoading: jest.fn(),
      endLoading: jest.fn(),
    });

    const { asFragment: fragmentDisabledLoading } = render(
      <Section label='<label>' disabledLoading>
        one children
      </Section>
    );

    const { asFragment: fragmentEnabledLoading } = render(
      <Section label='<label>'>one children</Section>
    );

    expect(fragmentDisabledLoading()).not.toStrictEqual(
      fragmentEnabledLoading()
    );
  });
});
