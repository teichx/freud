import { Form } from 'react-final-form';

import { FormComponentProps } from './types';

export function FormComponent<
  FormValues = Record<string, unknown>,
  InitialFormValues = Partial<FormValues>
>({ children, ...props }: FormComponentProps<FormValues, InitialFormValues>) {
  return (
    <Form
      {...props}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>{children}</form>
      )}
    />
  );
}
