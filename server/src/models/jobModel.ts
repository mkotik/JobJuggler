import { prisma } from "../prisma/config";

export const getJobsByUserId = async (userId: number) => {
  console.log("/src/models/jobtModel in getJobsByUserId");
  try {
    const jobs = await prisma.jobs.findMany({
      where: {
        //@ts-ignore
        belongs_to_id: userId,
      },
      include: {
        client: true,
        line_items: {
          include: {
            line_item: true,
          },
        },
        job_requests: {
          include: {
            request: true,
          },
        },
        job_quotes: {
          include: {
            quote: true,
          },
        },
      },
    });

    return jobs;
  } catch (error) {
    console.error("Error fetching jobs by user id:", error);
    throw error;
  }
};
