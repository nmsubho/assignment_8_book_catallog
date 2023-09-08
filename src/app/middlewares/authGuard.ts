import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../config';
import { ENUM_USER_ROLE } from '../../enums/user';
import ApiError from '../../errors/ApiError';
import { jwtHelpers } from '../../helpers/jwtHelpers';

const authGuard =
  (...roles: string[]) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      let decoded = null;
      roles.push(ENUM_USER_ROLE.SUPER_ADMIN);
      const token = req.headers.authorization;
      if (!token) {
        throw new ApiError(
          httpStatus.UNAUTHORIZED,
          'You are not authorized to perform this task!'
        );
      } else {
        decoded = jwtHelpers.verifyToken(token, config.jwt.secret as Secret);
        req.user = decoded;
        if (roles.includes(decoded.role)) {
          next();
        } else {
          throw new ApiError(
            httpStatus.UNAUTHORIZED,
            'You are not authorized to perform this task!'
          );
        }
      }
    } catch (error) {
      next(error);
    }
  };

export default authGuard;
