import { setIn } from 'final-form';
import { ValidationError, AnySchema } from 'yup';

export const schemaValidation =
  <TValue>(schema: AnySchema) =>
  async (values: TValue) => {
    try {
      await schema.validate(values, { abortEarly: false });
    } catch (err) {
      const errors = (err as ValidationError).inner.reduce(
        (formError, innerError) =>
          setIn(formError, innerError.path || '', innerError.message),
        {}
      );

      return errors;
    }
  };
