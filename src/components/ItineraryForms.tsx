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
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 w-[1000px] items-center justify-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Traveller Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Guest Name:
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={travellerDetails.guestName}
              onChange={(e) => onChange("guestName", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Arrival Date:
            </label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={travellerDetails.arrivalDate}
              onChange={(e) => onChange("arrivalDate", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contact Number:
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={travellerDetails.contactNumber}
              onChange={(e) => onChange("contactNumber", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Arrival Location:
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={travellerDetails.arrivalLocation}
              onChange={(e) => onChange("arrivalLocation", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Departure Location:
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={travellerDetails.departureLocation}
              onChange={(e) => onChange("departureLocation", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Adults:
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={travellerDetails.adults}
              onChange={(e) => onChange("adults", parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Children:
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={travellerDetails.children}
              onChange={(e) => onChange("children", parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Special Requests:
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={travellerDetails.specialRequests}
              onChange={(e) => onChange("specialRequests", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Child Age (comma separated):
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={travellerDetails.childAge}
              onChange={(e) => onChange("childAge", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Meal Plan:
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={travellerDetails.mealPlan}
              onChange={(e) => onChange("mealPlan", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Package Nights:
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={travellerDetails.packageNights}
              onChange={(e) =>
                onChange("packageNights", parseInt(e.target.value))
              }
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Vehicle and type:
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={travellerDetails.vehicle}
              onChange={(e) => onChange("vehicle", e.target.value)}
            />
          </div>
        </div>
      </div>
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
    <div className="bg-gray-50 shadow-md rounded-lg p-6 mt-6 ">
      <h5 className="text-xl font-bold text-gray-800 mb-4">
        Destination {destIndex + 1}
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Destination Name:
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={destination.destinationName}
            onChange={(e) =>
              onChange(dayIndex, destIndex, "destinationName", e.target.value)
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description:
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
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
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL:
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={destination.destinationImages}
            onChange={(e) =>
              onChange(dayIndex, destIndex, "destinationImages", e.target.value)
            }
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Attractions:
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
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
        </div>
      </div>
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
    <div className="bg-white shadow-xl rounded-lg p-6 mt-8">
      <h4 className="text-2xl font-bold text-gray-800 mb-6">
        Day {day.dayNumber}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Hotel Name:
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={day.hotelName}
            onChange={(e) =>
              onChange(dayIndex, null, "hotelName", e.target.value)
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Night Stay Location:
          </label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            value={day.nightStayLocation}
            onChange={(e) =>
              onChange(dayIndex, null, "nightStayLocation", e.target.value)
            }
          />
        </div>
      </div>
      {day.destinations.map((destination, destIndex) => (
        <DestinationForm
          key={destIndex}
          destination={destination}
          dayIndex={dayIndex}
          destIndex={destIndex}
          onChange={onChange}
        />
      ))}
      <button
        className="mt-6 px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
        onClick={() => onAddDestination(dayIndex)}
      >
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
  //   onAddDay,
  onAddDestination,
  onChange,
}) => {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      {itineraryDetails.map((day, dayIndex) => (
        <DayDetailsForm
          key={dayIndex}
          day={day}
          dayIndex={dayIndex}
          onChange={onChange}
          onAddDestination={onAddDestination}
        />
      ))}
      {/* Uncomment below if you need a button for adding a new day */}
      {/* <button
        className="mt-6 w-full py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition duration-300"
        onClick={onAddDay}
      >
        Add New Day
      </button> */}
    </div>
  );
};

export { TravellerDetailsForm, ItineraryForm, DayDetailsForm, DestinationForm };
