// src/types/Itinerary.ts
export interface Vehicle {
  name: string;
  count: number;
  type: string;
}

export interface TravellerDetails {
  guestName: string;
  arrivalDate: string;
  contactNumber: string;
  arrivalLocation: string;
  departureLocation: string;
  adults: number;
  children: number;
  childAge: number[];
  mealPlan: string;
  packageNights: number;
  vehicle: Vehicle[];
  specialRequests: string;
}

export interface Destination {
  destinationName: string;
  destinationDescription: string;
  destinationImages: string;
  attractions: string[];
}

export interface ItineraryDay {
  dayNumber: number;
  nightStayLocation: string;
  hotelName: string;
  destinations: Destination[];
}

export interface ConsultantInfo {
  consultantName: string;
  contact: string;
  email: string;
  address: string;
}

export interface CompanyInfo {
  companyName: string;
  contact: string;
  email: string;
  website: string;
}

export interface ItineraryData {
  companyImages: {
    companyBackgroundImage: string;
    companyLastPageImage: string;
    stateBackgroundImage: string;
    defaultImage: string;
    companyLogo: string;
  };
  consultantInfo: ConsultantInfo;
  companyInfo: CompanyInfo;
  travellerDetails: TravellerDetails;
  itineraryDetails: ItineraryDay[];
}
