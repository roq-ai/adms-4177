import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable(),
  company_id: yup.string().nullable(),
});
