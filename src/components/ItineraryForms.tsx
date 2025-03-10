import React from "react";
import { TravellerDetails, ItineraryDay, Destination } from "../types/itenary";

// Traveller Details Form Component
interface TravellerDetailsFormProps {
  travellerDetails: TravellerDetails;
  onChange: (field: string, value: string | number | string[]) => void;
}

const TravellerDetailsForm: React.FC<TravellerDetailsFormProps> = ({
  travellerDetails,
  onChange,
}) => {
  return (
    <div>
      <h3>Traveller Details</h3>
      <label>
        Guest Name:
        <input
          type="text"
          value={travellerDetails.guestName}
          onChange={(e) => onChange("guestName", e.target.value)}
        />
      </label>
      <br />
      <label>
        Arrival Date:
        <input
          type="date"
          value={travellerDetails.arrivalDate}
          onChange={(e) => onChange("arrivalDate", e.target.value)}
        />
      </label>
      <br />
      <label>
        Contact Number:
        <input
          type="text"
          value={travellerDetails.contactNumber}
          onChange={(e) => onChange("contactNumber", e.target.value)}
        />
      </label>
      <br />
      <label>
        Arrival Location:
        <input
          type="text"
          value={travellerDetails.arrivalLocation}
          onChange={(e) => onChange("arrivalLocation", e.target.value)}
        />
      </label>
      <br />
      <label>
        Departure Location:
        <input
          type="text"
          value={travellerDetails.departureLocation}
          onChange={(e) => onChange("departureLocation", e.target.value)}
        />
      </label>
      <br />
      <label>
        Adults:
        <input
          type="number"
          value={travellerDetails.adults}
          onChange={(e) => onChange("adults", parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>
        Children:
        <input
          type="number"
          value={travellerDetails.children}
          onChange={(e) => onChange("children", parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>
        Special Requests:
        <input
          type="text"
          value={travellerDetails.specialRequests}
          onChange={(e) => onChange("specialRequests", e.target.value)}
        />
      </label>
      <br />
      <label>
        Child Age (comma separated):
        <input
          type="text"
          value={travellerDetails.childAge.join(", ")}
          onChange={(e) =>
            onChange(
              "childAge",
              e.target.value.split(", ").map((age) => parseInt(age))
            )
          }
        />
      </label>
      <br />
      <label>
        Meal Plan:
        <input
          type="text"
          value={travellerDetails.mealPlan}
          onChange={(e) => onChange("mealPlan", e.target.value)}
        />
      </label>
      <br />
      <label>
        Package Nights:
        <input
          type="number"
          value={travellerDetails.packageNights}
          onChange={(e) => onChange("packageNights", parseInt(e.target.value))}
        />
      </label>
      <br />
      <label>
        Vehicle(s) (comma separated):
        <input
          type="text"
          value={travellerDetails.vehicle.join(", ")}
          onChange={(e) => onChange("vehicle", e.target.value.split(", "))}
        />
      </label>
    </div>
  );
};

// Destination Form Component
interface DestinationFormProps {
  destination: Destination;
  dayIndex: number;
  destIndex: number;
  onChange: (
    dayIndex: number,
    destIndex: number,
    field: string,
    value: string | string[]
  ) => void;
}

const DestinationForm: React.FC<DestinationFormProps> = ({
  destination,
  dayIndex,
  destIndex,
  onChange,
}) => {
  return (
    <div>
      <h5>Destination {destIndex + 1}</h5>
      <label>
        Destination Name:
        <input
          type="text"
          value={destination.destinationName}
          onChange={(e) =>
            onChange(dayIndex, destIndex, "destinationName", e.target.value)
          }
        />
      </label>
      <br />
      <label>
        Description:
        <input
          type="text"
          value={destination.destinationDescription}
          onChange={(e) =>
            onChange(
              dayIndex,
              destIndex,
              "destinationDescription",
              e.target.value
            )
          }
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          value={destination.destinationImages}
          onChange={(e) =>
            onChange(dayIndex, destIndex, "destinationImages", e.target.value)
          }
        />
      </label>
      <br />
      <label>
        Attractions:
        <input
          type="text"
          value={destination.attractions.join(", ")}
          onChange={(e) =>
            onChange(
              dayIndex,
              destIndex,
              "attractions",
              e.target.value.split(", ")
            )
          }
        />
      </label>
    </div>
  );
};

// Day Form Component
interface DayDetailsFormProps {
  day: ItineraryDay;
  dayIndex: number;
  onChange: (
    dayIndex: number,
    destIndex: number | null,
    field: string,
    value: string | string[]
  ) => void;
  onAddDestination: (dayIndex: number) => void;
}

const DayDetailsForm: React.FC<DayDetailsFormProps> = ({
  day,
  dayIndex,
  onChange,
  onAddDestination,
}) => {
  return (
    <div>
      <h4>Day {day.dayNumber}</h4>
      <label>
        Hotel Name:
        <input
          type="text"
          value={day.hotelName}
          onChange={(e) =>
            onChange(dayIndex, null, "hotelName", e.target.value)
          }
        />
      </label>
      <br />
      <label>
        Night Stay Location:
        <input
          type="text"
          value={day.nightStayLocation}
          onChange={(e) =>
            onChange(dayIndex, null, "nightStayLocation", e.target.value)
          }
        />
      </label>

      {/* Destinations */}
      {day.destinations.map((destination, destIndex) => (
        <DestinationForm
          key={destIndex}
          destination={destination}
          dayIndex={dayIndex}
          destIndex={destIndex}
          onChange={onChange}
        />
      ))}

      <button onClick={() => onAddDestination(dayIndex)}>
        Add Another Destination
      </button>
    </div>
  );
};

// Itinerary Form Component
interface ItineraryFormProps {
  itineraryDetails: ItineraryDay[];
  onAddDay: () => void;
  onAddDestination: (dayIndex: number) => void;
  onChange: (
    dayIndex: number,
    destIndex: number | null,
    field: string,
    value: string | string[]
  ) => void;
}

const ItineraryForm: React.FC<ItineraryFormProps> = ({
  itineraryDetails,
  onAddDay,
  onAddDestination,
  onChange,
}) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {itineraryDetails.map((day, dayIndex) => (
        <DayDetailsForm
          key={dayIndex}
          day={day}
          dayIndex={dayIndex}
          onChange={onChange}
          onAddDestination={onAddDestination}
        />
      ))}
      {/* <button onClick={onAddDay}>Add New Day</button> */}
    </div>
  );
};

export { TravellerDetailsForm, ItineraryForm, DayDetailsForm, DestinationForm };
