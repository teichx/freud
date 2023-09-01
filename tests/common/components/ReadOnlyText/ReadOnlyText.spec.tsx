import { render } from 'test-utils';

import { ReadOnlyText } from '~/common/components/ReadOnlyText';

describe('component.ReadOnlyText', () => {
  it('renders label and value', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ReadOnlyText label='<label>' value='<value>' />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders label value and helper text', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ReadOnlyText
        label='<label>'
        value='<value>'
        helperText='<helper text>'
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('unForceHelperText', () => {
    expect.assertions(1);

    const { asFragment } = render(
      <ReadOnlyText label='<label>' value='<value>' unForceHelperText />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('unForceHelperText difference to default', () => {
    expect.assertions(1);

    const { asFragment: unForceHelperTextFragment } = render(
      <ReadOnlyText label='<label>' value='<value>' unForceHelperText />
    );

    const { asFragment: defaultFragment } = render(
      <ReadOnlyText label='<label>' value='<value>' />
    );

    expect(unForceHelperTextFragment()).not.toStrictEqual(defaultFragment());
  });
});
