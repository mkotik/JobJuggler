import { prisma } from "../prisma/config";

export const getInvoicesByUserId = async (userId: number) => {
  console.log("/src/models/invoiceModel in getInvoicesByUserId");
  try {
    //@ts-ignore
    const invoices = await prisma.invoices.findMany({
      where: {
        belongs_to_id: userId,
      },
      include: {
        client: true,
        job: true,
        tax: true,
        belongs_to: true,
        additional_line_items: {
          include: {
            line_item: true,
          },
        },
      },
    });

    return invoices;
  } catch (error) {
    console.error("Error fetching invoices by user id:", error);
    throw error;
  }
};
