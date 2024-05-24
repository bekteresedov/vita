import * as Yup from 'yup';

export const emailValidationSchema = Yup.string()
    .email('Invalid email address')
    .required('Email is required');