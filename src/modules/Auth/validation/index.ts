import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').label('Name'),
  email: Yup.string().required('Email is required').label('Email'),
  password: Yup.string().required('Password is required').label('Password'),
});
