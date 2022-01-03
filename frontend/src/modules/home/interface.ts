export interface OfferProps {
  id: string;
  title: string;
  lat: number;
  lon: number;
  publishedAt: string;
  city: string;
  street: string;
  companyName: string;
  companyUrl: string;
  companyLogo: string;
  salaryFrom: number;
  salaryTo: number;
  salaryCurrency: number;
  skills: { name: string; level: number }[];
}
