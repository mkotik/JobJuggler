import { prisma, Prisma } from "../prisma/config";
import { ClientsCreateInput } from "src/config/types";

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

export const saveClientWithAddresses = async (
  clientDetails: ClientsCreateInput,
  belongs_to_id: number
) => {
  let { property_address, billing_address, ...clientData } = clientDetails;

  return await prisma.$transaction(async (tx) => {
    // Save property address
    let propertyAddressId: number | null = null;
    if (property_address) {
      const propertyAddressData: Prisma.AddressesCreateInput = property_address;
      const savedPropertyAddress = await tx.addresses.create({
        data: propertyAddressData,
      });
      propertyAddressId = savedPropertyAddress.id;
    }

    // Save billing address
    let billingAddressId: number | null = null;
    if (!clientDetails.billing_address_same_as_property && billing_address) {
      const billingAddressData: Prisma.AddressesCreateInput = billing_address;
      const savedBillingAddress = await tx.addresses.create({
        data: billingAddressData,
      });
      billingAddressId = savedBillingAddress.id;
    }

    // Save client
    if (propertyAddressId) {
      const saveClientData: Prisma.ClientsCreateInput = {
        ...clientData,
        belongs_to: { connect: { id: belongs_to_id } },
        property_address: { connect: { id: propertyAddressId } },
        billing_address: billingAddressId
          ? { connect: { id: billingAddressId } }
          : undefined,
      };

      return await tx.clients.create({
        data: saveClientData,
      });
    }
    throw new Error("Property address is required for client creation.");
  });
};
