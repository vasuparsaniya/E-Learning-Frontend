import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  first_name: Yup.string()
    .required('First name is required')
    .label('First Name'),
  last_name: Yup.string().required('Last name is required').label('Last name'),
  email: Yup.string().required('Email is required').label('Email'),
  password: Yup.string().required('Password is required').label('Password'),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required').label('Email'),
  password: Yup.string().required('Password is required').label('Password'),
});
