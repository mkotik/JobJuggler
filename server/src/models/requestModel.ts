import prisma from "../prisma/config";

export const getRequestsByUserId = async (userId: number) => {
  console.log("/src/models/requestModel in getRequestsByUserId");
  try {
    const requests = await prisma.requests.findMany({
      where: {
        //@ts-ignore
        belongs_to_id: userId,
      },
      include: {
        assessment: true,
        client: true,
        quotes: {
          include: {
            quote: true,
          },
        },
        job_requests: {
          include: {
            job: true,
          },
        },
      },
    });

    return requests;
  } catch (error) {
    console.error("Error fetching requests by user id:", error);
    throw error;
  }
};
