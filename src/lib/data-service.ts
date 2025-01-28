import { prisma } from "../../prisma_init";

export const getAllEvents = async (take?: number, pageNo?: number) => {
  try {
    const data = await prisma.event.findMany({
      skip: (pageNo || 1 - 1) * (take || 100),
      take: take || 100,
    });

    return { data, error: null };
  } catch (error) {
    return { error, data: null };
  }
};

export const getEvent = async (id: number) => {
  try {
    const data = await prisma.event.findFirst({
      where: {
        id,
      },
    });

    return { data, status: true };
  } catch (error) {
    const err = error as Error;
    return { error: err.message, status: false };
  }
};

export const deleteEvent = async (id: number) => {
  const { error: eventError } = await getEvent(id);
  if (eventError) return { status: false, error: "Event does not exist" };

  try {
    await prisma.event.delete({
      where: {
        id,
      },
    });

    return { error: null };
  } catch (error) {
    return error;
  }
};

export const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};
