import { prisma } from "../prisma/config";

export const getUserByEmail = async (email: string) => {
  console.log("/src/models/userModel in getUserByEmail");
  try {
    const user = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw error;
  }
};
