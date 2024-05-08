export type Status = "Paid" | "Late";

export type Tenant = {
  name: string;
  property: string;
  startDate: Date;
  monthlyRent: string;
  status: Status;
  action?: string;
};
