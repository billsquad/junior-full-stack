import { Injectable } from "@nestjs/common";
import { data } from "../../data";
import { Offer } from "./offer.interface";

@Injectable()
export class OffersService {
  private offers: Offer[] | [] = [];

  getOffers(): Offer[] {
    this.offers = data.map((offer) => {
      return {
        id: offer.id,
        title: offer.title,
        publishedAt: offer.published_at,
        lon: offer.longitude,
        lat: offer.latitude,
        city: offer.city,
        street: offer.street,
        companyName: offer.company_name,
        companyUrl: offer.company_url,
        companyLogo: offer.company_logo_url,
        skills: offer.skills,
        salaryFrom: offer.salary_from,
        salaryTo: offer.salary_to,
        salaryCurrency: offer.salary_currency,
      };
    });

    return [...this.offers];
  }

  getOffersBySearch(title: string): Offer[] {
    this.offers = data
      .filter((offer) =>
        offer.title
          .toLowerCase()
          .replace(/ /g, "")
          .startsWith(title)
      )
      .map((offer) => {
        return {
          id: offer.id,
          title: offer.title,
          publishedAt: offer.published_at,
          lon: offer.longitude,
          lat: offer.latitude,
          city: offer.city,
          street: offer.street,
          companyName: offer.company_name,
          companyUrl: offer.company_url,
          companyLogo: offer.company_logo_url,
          skills: offer.skills,
          salaryFrom: offer.salary_from,
          salaryTo: offer.salary_to,
          salaryCurrency: offer.salary_currency,
        };
      });

    return [...this.offers];
  }
}
