import { Controller, Get, Query } from "@nestjs/common";
import { OffersService } from "src/offers/offers.service";

@Controller("offers")
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  getOffers(@Query("title") title?: string) {

    if (title) {
      return this.offersService.getOffersBySearch(title);
    }
    return this.offersService.getOffers();
  }
}
