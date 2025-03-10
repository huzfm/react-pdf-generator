// src/sampleData.ts
import { ItineraryData } from "./types/itenary";

export const sampleItinerary: ItineraryData = {
  companyImages: {
    companyBackgroundImage:
      "https://td-production-images.s3.ap-south-1.amazonaws.com/Company/Title%20Page%20-%20Fit_a0c8a92a-8c5b-4e72-8366-b0026dbd352f.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=13b547ac5be10192b4e4689ee13ee71c739c6ae275455f440267e88526903567",
    companyLastPageImage:
      "https://td-production-images.s3.ap-south-1.amazonaws.com/Company/last%20page%20-%201%20_ae9fda35-49ae-49ca-8d72-465446f6add7_118cc5e4-9b6d-4623-b282-e020a1c16a08.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=eb55f5cd905015730a147cb2ff359b1f38d277aee9decbd305a14a4e5366396c",
    stateBackgroundImage:
      "https://td-production-images.s3.ap-south-1.amazonaws.com/Company/Cover%20page%20-%20fit_636ba9d8-a1c7-4dea-9af4-8e605ea766fa.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=cb37ef49492315d57a653caafd3ed0e9b3cb9d06fa6fc646207bf3d4b356dc48",
    defaultImage:
      "https://td-production-images.s3.ap-south-1.amazonaws.com/Company/default%20photo_fb3e42f8-3cd3-4b8d-bf96-56423fe4c68d.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=6dc518fbae5eabc4a74297443b48070939866e9b8fd8c862f7a2c72b136ccb4f",
    companyLogo:
      "https://td-production-images.s3.ap-south-1.amazonaws.com/Company/logo_f40ac362-0dc1-426c-a3f0-eaa66a18f184.png?X-Amz-Expires=604800&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=f507e690dd11e18e5fe2e33ecb06792a3cb95060d382b45c0092d2be7b7a739e",
  },
  consultantInfo: {
    consultantName: "Imran",
    contact: "9792212227",
    email: "test@gmail.com",
    address: "Soura, Srinagar",
  },
  companyInfo: {
    companyName: "Kashmir Travels",
    contact: "9792212227",
    email: "test@gmail.com",
    website: "www.tour.test.com",
  },
  travellerDetails: {
    guestName: "Guest",
    arrivalDate: "2025-05-10T00:00:00.000Z",
    contactNumber: "9797222227",
    arrivalLocation: "Jammu",
    departureLocation: "Jammu",
    adults: 6,
    children: 0,
    childAge: [0, 0, 0],
    mealPlan: "MAP",
    packageNights: 7,
    vehicle: [
      {
        name: "Toyota Innova",
        count: 1,
        type: "Non-AC",
      },
    ],
  },
  itineraryDetails: [
    {
      dayNumber: 1,
      nightStayLocation: "Katra",
      hotelName: "Hotel Nek Katra",
      destinations: [
        {
          destinationName: "Katra",
          destinationDescription: "Katra is a beautiful city.",
          destinationImages: "https://example.com/katra.jpg",
          attractions: ["Attraction 1", "Attraction 2"],
        },
      ],
    },
    // Additional days can be added here similarly...
  ],
};
