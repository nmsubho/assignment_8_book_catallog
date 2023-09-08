import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import { ICredentials, ILoggedInUserResponse } from './auth.interface';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { User } from '@prisma/client';
import bcrypt from 'bcrypt';
import prisma from '../../../shared/prisma';

const signup = async (data: User): Promise<User> => {
  const isExist = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'User already exist!');
  }

  const encryptedUserPassword = await bcrypt.hash(
    data.password,
    Number(config.bcrypt_salt_rounds)
  );

  const result = await prisma.user.create({
    data: { ...data, password: encryptedUserPassword },
  });
  return result;
};

const signin = async (
  payload: ICredentials
): Promise<ILoggedInUserResponse> => {
  const { email, password } = payload;

  const isUserExists = await prisma.user.findUnique({ where: { email } });

  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist!');
  }

  if (
    isUserExists.password &&
    !(await bcrypt.compare(password, isUserExists.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password!');
  }

  const { id: userId, role } = isUserExists;

  const token = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    token,
  };
};

export const AuthService = {
  signup,
  signin,
};
