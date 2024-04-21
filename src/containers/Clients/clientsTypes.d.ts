// ClientType.ts

export interface ClientType {
  id: number;
  title: string;
  tags?: any; // You can replace 'any' with a more specific type
  first_name: string;
  last_name: string;
  company_name?: string | null; // Optional field
  use_company_name_as_primary: boolean;
  mobile_phone_number?: string | null; // Optional field
  work_phone_number?: string | null; // Optional field
  email?: string | null; // Optional field
  quote_follow_up: boolean;
  job_follow_up: boolean;
  invoice_follow_up: boolean;
  upcoming_visit_reminder: boolean;
  referred_by?: string | null; // Optional field
  billing_address_same_as_property: boolean;
  property_address?: AddressType; // Assuming you'll have an AddressType interface
  billing_address?: AddressType; // Assuming you'll have an AddressType interface
  created_date: Date;
  status?: string | null; // Optional field
  belongs_to_id: number;
}

// AddressType.ts

export interface AddressType {
  id: number;
  street1: string;
  street2?: string | null; // Optional field
  city: string;
  state: string;
  zip_code: string;
  country: string;
}
