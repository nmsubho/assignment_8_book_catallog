import { z } from 'zod';

const signupZodValidation = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required!',
    }),
    email: z.string({
      required_error: 'Email is required!',
    }),
    password: z.string({
      required_error: 'Password is required!',
    }),
    role: z.string({
      required_error: 'Role is required!',
    }),
    contactNo: z.string({
      required_error: 'Contact number is required!',
    }),
    address: z.string({
      required_error: 'Address is required!',
    }),
    profileImg: z.string().optional(),
  }),
});

const signinZodValidation = z.object({
  body: z.object({
    id: z.string({
      required_error: 'Email is required!',
    }),
    password: z.string({
      required_error: 'Password is required!',
    }),
  }),
});

export const AuthValidation = {
  signupZodValidation,
  signinZodValidation,
};
