import { User } from '@prisma/client';

import prisma from '../../../shared/prisma';

const getMyProfile = async (id: string): Promise<Partial<User> | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      address: true,
      role: true,
      contactNo: true,
      profileImg: true,
    },
  });
  return result;
};

export const ProfileService = {
  getMyProfile,
};
