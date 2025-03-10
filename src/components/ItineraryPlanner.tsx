import React from "react";
import { TravellerDetailsForm, ItineraryForm } from "./ItineraryForms";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ItineraryPDF from "./ItineraryPDF";
import { ItineraryData, ItineraryDay, Destination } from "../types/itenary";

const ItineraryPlanner: React.FC = () => {
  const initialItineraryData: ItineraryData = {
    companyImages: {
      companyBackgroundImage: "",
      companyLastPageImage: "",
      stateBackgroundImage: "",
      defaultImage: "",
      companyLogo: "",
    },
    consultantInfo: {
      consultantName: "",
      contact: "",
      email: "",
      address: "",
    },
    companyInfo: {
      companyName: "",
      contact: "",
      email: "",
      website: "",
    },
    travellerDetails: {
      guestName: "",
      arrivalDate: "",
      contactNumber: "",
      arrivalLocation: "",
      departureLocation: "",
      adults: 0,
      children: 0,
      childAge: [],
      mealPlan: "",
      packageNights: 0,
      vehicle: [],
      specialRequests: "",
    },
    itineraryDetails: [],
  };

  const [itineraryData, setItineraryData] =
    React.useState<ItineraryData>(initialItineraryData);

  const handleTravellerChange = (
    field: string,
    value: string | number | string[]
  ) => {
    setItineraryData((prevData) => ({
      ...prevData,
      travellerDetails: {
        ...prevData.travellerDetails,
        [field]: value,
      },
    }));
  };

  const handleItineraryChange = (
    dayIndex: number,
    destIndex: number | null,
    field: string,
    value: string | string[]
  ) => {
    const updatedItinerary = [...itineraryData.itineraryDetails];
    if (destIndex === null) {
      updatedItinerary[dayIndex] = {
        ...updatedItinerary[dayIndex],
        [field]: value,
      };
    } else {
      updatedItinerary[dayIndex].destinations[destIndex] = {
        ...updatedItinerary[dayIndex].destinations[destIndex],
        [field]: value,
      };
    }
    setItineraryData({ ...itineraryData, itineraryDetails: updatedItinerary });
  };
  const handleAddDay = () => {
    const newDay: ItineraryDay = {
      dayNumber: itineraryData.itineraryDetails.length + 1,
      nightStayLocation: "",
      hotelName: "",
      destinations: [
        {
          destinationName: "",
          destinationDescription: "",
          destinationImages: "",
          attractions: [],
        },
      ], // Automatically add one destination
    };

    setItineraryData((prevData) => ({
      ...prevData,
      itineraryDetails: [...prevData.itineraryDetails, newDay],
    }));
  };

  const handleAddDestination = (dayIndex: number) => {
    const newDestination: Destination = {
      destinationName: "",
      destinationDescription: "",
      destinationImages: "",
      attractions: [],
    };

    setItineraryData((prevData) => {
      const updatedItinerary = [...prevData.itineraryDetails];
      updatedItinerary[dayIndex].destinations.push(newDestination);
      return { ...prevData, itineraryDetails: updatedItinerary };
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="text-5xl text-red-900">Itinerary Planner</h2>

      <TravellerDetailsForm
        travellerDetails={itineraryData.travellerDetails}
        onChange={handleTravellerChange}
      />

      <ItineraryForm
        itineraryDetails={itineraryData.itineraryDetails}
        onChange={handleItineraryChange}
        onAddDestination={handleAddDestination}
      />

      <button onClick={handleAddDay} style={{ marginTop: "20px" }}>
        Add New Day
      </button>

      <div style={{ marginTop: "20px" }}>
        <PDFDownloadLink
          document={<ItineraryPDF itinerary={itineraryData} />}
          fileName="itinerary.pdf"
        >
          {({ loading }) => (loading ? "Loading document..." : "Download PDF")}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default ItineraryPlanner;
