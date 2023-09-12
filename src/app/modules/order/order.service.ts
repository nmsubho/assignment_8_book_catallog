import { Order } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { JwtPayload } from 'jsonwebtoken';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const createOrder = async (data: any): Promise<Order> => {
  const result = await prisma.order.create({ data });
  return result;
};

const getAllOrders = async (
  user: JwtPayload | null,
  options: IPaginationOptions
): Promise<IGenericResponse<Partial<Order>[]>> => {
  const { size, page, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(options);

  const result = await prisma.order.findMany({
    where: user && user.role === 'admin' ? {} : { userId: user && user.userId },
    skip,
    take: size,
    orderBy: { [sortBy]: sortOrder },
  });
  const total = await prisma.order.count({
    where: user && user.role === 'admin' ? {} : { userId: user && user.userId },
  });

  return {
    meta: {
      total,
      page,
      size,
      totalPage: Math.ceil(total / size),
    },
    data: result,
  };
};

const getSingleOrder = async (
  user: JwtPayload | null,
  id: string
): Promise<Partial<Order> | null> => {
  const result = await prisma.order.findUnique({
    where: {
      id,
    },
  });

  if (user && user.role !== 'admin' && user.userId !== result?.userId) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'You are not authorized to perform this task!'
    );
  }

  return result;
};

export const OrderService = {
  createOrder,
  getAllOrders,
  getSingleOrder,
};
