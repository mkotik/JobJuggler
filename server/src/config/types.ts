export type ClientsCreateInput = {
  title: string;
  tags?: any;
  first_name: string;
  last_name: string;
  company_name?: string | null;
  use_company_name_as_primary?: boolean;
  mobile_phone_number?: string | null;
  work_phone_number?: string | null;
  email: string;
  quote_follow_up?: boolean;
  job_follow_up?: boolean;
  invoice_follow_up?: boolean;
  upcoming_visit_reminder?: boolean;
  referred_by?: string | null;
  billing_address_same_as_property?: boolean;
  created_date?: Date | string;
  status?: string | null;
  property_address: AddressCreateInput;
  billing_address?: AddressCreateInput;
  phone_type?: string;
  email_type?: string;
  receives_texts?: boolean;
};

export type AddressCreateInput = {
  street1: string;
  street2?: string | null;
  city: string;
  state: string;
  zip_code: string;
  country: string;
};
