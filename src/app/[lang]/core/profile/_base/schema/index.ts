import * as yup from 'yup';

export const createProfileSchema = () =>
  yup.object().shape({
    user: yup.object().shape({
      id: yup.string(),
      name: yup.string().required().trim(),
      email: yup.string().required().trim().email(),
      emailVerified: yup.bool(),
      image: yup.string(),
    }),
    personal: yup.object().shape({
      phone: yup.string().trim(),
      phoneVerified: yup.bool(),
    }),
  });
