import { prisma } from "../prisma/config";

export const getQuotesByUserId = async (userId: number) => {
  console.log("/src/models/quoteModel in getQuoteByUserId");
  try {
    const quotes = await prisma.quotes.findMany({
      where: {
        //@ts-ignore
        belongs_to_id: userId,
      },
      include: {
        client: true,
        tax: true,
        line_items: {
          include: {
            line_item: true,
          },
        },
        requests: {
          include: {
            request: true,
          },
        },
        job_quotes: {
          include: {
            job: true,
          },
        },
      },
    });

    return quotes;
  } catch (error) {
    console.error("Error fetching quotes by user id:", error);
    throw error;
  }
};
