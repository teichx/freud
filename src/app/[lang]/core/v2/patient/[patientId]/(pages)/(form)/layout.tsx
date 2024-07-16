'use client';
import { PropsWithChildren } from 'react';

import { Form } from 'react-final-form';

import { useGetPatient } from './useGetPatient';

export default function PatientFormLayout({ children }: PropsWithChildren) {
  const { patient } = useGetPatient();

  return (
    <Form
      onSubmit={console.log}
      initialValues={patient}
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
