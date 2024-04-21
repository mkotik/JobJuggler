// types.ts

export type Tax = {
  id: number;
  name: string;
  rate: number;
  description?: string | null;
};

export type Address = {
  id: number;
  street1: string;
  street2?: string | null;
  city: string;
  state: string;
  zip_code: string;
  country: string;
};

export type UserType = {
  id: number;
  email?: string | null;
  password: string;
  first_name: string;
  last_name: string;
  phone_number?: string | null;
  company_name?: string | null;
  subscription_id?: string | null;
  free_trial_expiration_date?: Date | null;
  default_tax?: Tax | null;
  default_tax_id?: number | null;
  address?: Address | null;
  address_id?: number | null;
  settings?: any; // Replace 'any' with a more specific type if needed
};

export type ClientType = {
  id: number;
  title: string;
  tags?: any; // Replace 'any' with a more specific type if needed
  first_name: string;
  last_name: string;
  company_name?: string | null;
  use_company_name_as_primary: boolean;
  mobile_phone_number?: string | null;
  work_phone_number?: string | null;
  email?: string | null;
  quote_follow_up: boolean;
  job_follow_up: boolean;
  invoice_follow_up: boolean;
  upcoming_visit_reminder: boolean;
  referred_by?: string | null;
  billing_address_same_as_property: boolean;
  property_address?: Address | null;
  billing_address?: Address | null;
  property_address_id?: number | null;
  billing_address_id?: number | null;
  created_date: Date;
  status?: string | null;
  belongs_to: User;
  belongs_to_id: number;
};

export type Assessment = {
  id: number;
  instructions?: string | null;
  start_date?: Date | null;
  end_date?: Date | null;
  schedule_later: boolean;
  start_time?: Date | null;
  end_time?: Date | null;
  any_time: boolean;
  team?: string | null;
};

export type RequestType = {
  id: number;
  status: string;
  tags?: any; // Replace 'any' with a more specific type if needed
  emailed_to_client: boolean;
  texted_to_client: boolean;
  title: string;
  service_details: string;
  assessment_date: Date;
  backup_assessment__date?: Date | null;
  preferred_arrival_times?: string | null;
  on_site_assesment_required: boolean;
  assessment: Assessment;
  client: ClientType;
  client_id: number;
  assessment_id: number;
  internal_notes: string;
  internalAttachmentUrl: string;
  link_to_releated_quotes: boolean;
  link_to_releated_jobs: boolean;
  link_to_releated_invoices: boolean;
};

export type LineItem = {
  id: number;
  type: string;
  name: string;
  description?: string | null;
  quantity: number;
  unit_price: number;
  markup?: number | null;
  img_url?: string | null;
  recommend_item: boolean;
};

export type QuoteType = {
  id: number;
  tags?: any; // Replace 'any' with a more specific type if needed
  emailed_to_client: boolean;
  texted_to_client: boolean;
  status: string;
  title: string;
  quote_number: string;
  opportunity_rating?: string | null;
  client: ClientType;
  client_id: number;
  line_items: LineItem[];
  client_message?: string | null;
  discount?: number | null;
  discount_unit?: string | null;
  tax?: Tax | null;
  tax_id?: number | null;
  required_deposit?: number | null;
  link_to_releated_jobs: boolean;
  link_to_releated_invoices: boolean;
};

export type JobType = {
  id: number;
  tags?: any; // Replace 'any' with a more specific type if needed
  emailed_to_client: boolean;
  texted_to_client: boolean;
  status: string;
  client: ClientType;
  client_id: number;
  title: string;
  instructions?: string | null;
  number: string;
  schedule_type: string;
  recurring_frequency?: string | null;
  recurring_interval?: string | null;
  day_of_week?: string | null;
  day_of_year?: string | null;
  duration?: string | null;
  start_date?: Date | null;
  end_date?: Date | null;
  start_time?: Date | null;
  end_time?: Date | null;
  schedule_later: boolean;
  team?: string | null;
  email_team: boolean;
  invoice_reminder: boolean;
  internal_notes?: string | null;
  internal_attachment_url?: string | null;
  link_to_related_invoices: boolean;
};

export type InvoiceType = {
  id: number;
  tags?: any; // Replace 'any' with a more specific type if needed
  emailed_to_client: boolean;
  texted_to_client: boolean;
  issued_date: Date;
  due_date?: Date | null;
  status: string;
  type: string;
  subject: string;
  client: ClientType;
  client_id: number;
  job?: JobType | null;
  tax?: Tax | null;
  additional_line_items: LineItem[];
  client_message: string;
  internal_notes: string;
  internalAttachmentUrl: string;
};
