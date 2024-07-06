'use client';
import { PropsWithChildren } from 'react';

import { Form } from 'react-final-form';

export default function PatientFormLayout({ children }: PropsWithChildren) {
  return (
    <Form
      onSubmit={console.log}
      render={({ handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          style={{
            flexGrow: 1,
            display: 'flex',
          }}
        >
          {children}
        </form>
      )}
    />
  );
}
