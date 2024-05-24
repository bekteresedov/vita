import * as Yup from 'yup';
import { emailValidationSchema } from './email-validation-schema';

export const contactValidationSchema = Yup.object({
    fullName: Yup.string()
        .min(3, 'Full name must be at least 3 characters')
        .max(50, 'Full name must be less than 50 characters')
        .required('Full name is required'),
    email: emailValidationSchema,
    phoneNumber: Yup.string()
        .matches(/^\+?[1-9]\d{1,14}$/, 'Phone number is not valid. It should be in E.164 format, e.g., +1234567890')
        .nullable(),
    message: Yup.string()
        .min(10, 'Message must be at least 10 characters')
        .required('Message is required'),
    agreement: Yup.boolean()
        .oneOf([true], 'You must accept the privacy policy')
        .required('You must accept the privacy policy'),
});