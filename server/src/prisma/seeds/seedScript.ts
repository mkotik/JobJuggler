const { PrismaClient } = require("@prisma/client");
process.env.DATABASE_URL =
  "postgresql://mkotik:Gu!tar564@142.93.198.163:5432/jobr";

const prisma = new PrismaClient();

async function main() {
  // Taxes
  const tax13 = await prisma.taxes.create({
    data: {
      name: "GST",
      rate: 0.15,
      description: "Goods and Services Tax",
    },
  });

  // Addresses
  const address13 = await prisma.addresses.create({
    data: {
      street1: "456 Elm Street",
      city: "Willow Creek",
      state: "IL",
      zip_code: "60089",
      country: "USA",
    },
  });

  // Users
  const user13 = await prisma.users.create({
    data: {
      email: "whilesg@deepsea.com",
      password: "oceanW4ves!",
      first_name: "Aria",
      last_name: "Star",
      phone_number: `+1 847-555-${Math.floor(Math.random() * 9000) + 1000}`,
      default_tax_id: tax13.id,
      address_id: address13.id,
      free_trial_expiration_date: new Date("2024-06-15"),
    },
  });

  // Clients
  const client13 = await prisma.clients.create({
    data: {
      title: "Mrs.",
      first_name: "Luna",
      last_name: "Moon",
      mobile_phone_number: `+1 847-556-${
        Math.floor(Math.random() * 9000) + 1000
      }`,
      property_address_id: address13.id,
    },
  });

  // Jobs
  const job13 = await prisma.jobs.create({
    data: {
      status: "Completed",
      client_id: client13.id,
      title: "Painting the Fence",
      number: "J987654",
      schedule_type: "recurring",
    },
  });

  // LineItems
  const lineItem13 = await prisma.lineItems.create({
    data: {
      type: "Service",
      name: "Fence Painting",
      unit_price: 50.0,
    },
  });

  // LineItemJob
  await prisma.lineItemJob.create({
    data: {
      job_id: job13.id,
      line_item_id: lineItem13.id,
    },
  });

  console.log("Seed data created!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
