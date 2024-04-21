const { PrismaClient } = require("@prisma/client");
process.env.DATABASE_URL =
  "postgresql://mkotik:Gu!tar564@142.93.198.163:5432/jobr";

const prisma = new PrismaClient();

const randomDate = () => {
  const start = new Date(2020, 0, 1);
  const end = new Date();
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

const generateRandomInvoice = () => {
  const statuses = ["paid", "pending", "due"];
  const types = ["invoice", "receipt", "estimate"];
  const subjects = ["Project A", "Service B", "Product C"];
  const clientMessages = ["Thank you!", "Please review", "Payment due"];

  return {
    tags: { exampleTag: "exampleValue" }, // Replace with actual tag values
    emailed_to_client: Math.random() > 0.5,
    texted_to_client: Math.random() > 0.5,
    issued_date: randomDate(),
    due_date: randomDate(),
    status: statuses[Math.floor(Math.random() * statuses.length)],
    type: types[Math.floor(Math.random() * types.length)],
    subject: subjects[Math.floor(Math.random() * subjects.length)],
    client_id: Math.floor(Math.random() * 10) + 1, // Assuming client IDs range from 1 to 10
    client_message:
      clientMessages[Math.floor(Math.random() * clientMessages.length)],
    internal_notes: "Random internal note",
    internalAttachmentUrl: "https://example.com/attachment",
  };
};

const populateInvoices = async () => {
  for (let i = 0; i < 5; i++) {
    const data = generateRandomInvoice();
    await prisma.invoices.create({
      data,
    });
    console.log(`Created invoice ${i + 1}`);
  }
};

populateInvoices()
  .catch((error) => {
    console.error("Error populating invoices:", error);
  })
  .finally(() => {
    prisma.$disconnect();
  });
