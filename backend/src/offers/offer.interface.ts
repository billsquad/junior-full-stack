export interface Offer {
  readonly id: string;
  title: string;
  readonly lat: number;
  readonly lon: number;
  readonly publishedAt: string;
  city: string;
  street: string;
  companyName: string;
  companyUrl: string;
  companyLogo: string;
  skills: { name: string; level: number }[];
  salaryFrom: number;
  salaryTo: number;
  salaryCurrency: string;
}
