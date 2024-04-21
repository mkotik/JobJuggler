import prisma from "../prisma/config";

export const getClientsByUserId = async (userId: number) => {
  console.log("/src/models/clientModel in getClientsByUserId");
  try {
    const clients = await prisma.clients.findMany({
      where: {
        belongs_to_id: userId,
      },
      include: {
        property_address: true,
        billing_address: true,
      },
    });

    return clients;
  } catch (error) {
    console.error("Error fetching clients by user id:", error);
    throw error;
  }
};
