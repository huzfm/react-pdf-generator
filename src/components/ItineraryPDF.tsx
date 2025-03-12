import React from "react";
import {
  Document,
  Page,
  Text,
  Image,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import { ItineraryData } from "../types/itenary";

const DEFAULT_LOGO =
  "https://td-production-images.s3.ap-south-1.amazonaws.com/Company/logo_f40ac362-0dc1-426c-a3f0-eaa66a18f184.png?X-Amz-Expires=604800&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=f507e690dd11e18e5fe2e33ecb06792a3cb95060d382b45c0092d2be7b7a739e";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 12,
    lineHeight: 1.5,
  },
  fullPageImage: { width: "100%", height: "100%" },
  header: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  section: { marginBottom: 20 },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  paragraph: { fontSize: 12, marginBottom: 2 },
  footer: { textAlign: "center", marginTop: 20 },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    width: "55%",
    paddingRight: 20,
    borderRightWidth: 1,
    borderRightColor: "#ccc",
  },
  imageContainer: {
    width: "45%",
    paddingLeft: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  overview: {
    fontSize: 20,
    color: "#0077cc",
    marginBottom: 10,
  },
  dayContainer: {
    marginTop: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  dayTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 3,
    color: "#555",
  },
  hotelText: {
    marginBottom: 3,
  },
  destinationContainer: {
    marginTop: 5,
    // marginLeft: 10,
  },
  destinationText: {
    fontSize: 12,
    color: "#666",
  },
  section2: {
    paddingTop: 30,
  },
  consultantData: {
    paddingBottom: 10,
  },
  fifthPage: {
    padding: 30,
    backgroundColor: "#f9f9f9",
  },
  dayContainerFifthPage: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    // Shadows may not be fully supported in react-pdf, but these are optional.
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  dayTitleFifthPage: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0077cc",
    marginBottom: 5,
  },
  destinationContainerFifthPage: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    padding: 10,
    backgroundColor: "#eaeaea",
    borderRadius: 8,
  },
  destinationTextFifthPage: {
    width: "40%",
    fontSize: 12,
    paddingRight: 10,
  },
  destinationImageFifthPage: {
    width: "100%",
    height: 100,
  },
});

const ItineraryPDF: React.FC<{ itinerary: ItineraryData }> = ({
  itinerary,
}) => {
  return (
    <Document>
      {/* First Page - Cover */}
      <Page size="A4" style={{ position: "relative" }}>
        <Image
          src="https://td-production-images.s3.ap-south-1.amazonaws.com/Company/Cover%20page%20-%20fit_636ba9d8-a1c7-4dea-9af4-8e605ea766fa.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=cb37ef49492315d57a653caafd3ed0e9b3cb9d06fa6fc646207bf3d4b356dc48"
          style={styles.fullPageImage}
        />
      </Page>

      {/* Second Page - Title */}
      <Page size="A4" style={{ position: "relative" }}>
        <Image
          src="https://td-production-images.s3.ap-south-1.amazonaws.com/Company/Title%20Page%20-%20Fit_a0c8a92a-8c5b-4e72-8366-b0026dbd352f.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=13b547ac5be10192b4e4689ee13ee71c739c6ae275455f440267e88526903567"
          style={styles.fullPageImage}
        />
      </Page>

      {/* Third Page - Travel Information */}
      <Page style={styles.page}>
        <Image src={DEFAULT_LOGO} style={{ width: 100 }} />

        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={{ fontSize: 20, paddingBottom: 10 }}>
              Travel Information
            </Text>
            <View>
              <Text style={[styles.title, { paddingBottom: 10 }]}>
                Guest Information
              </Text>
              <Text style={styles.consultantData}>
                Name: {itinerary.travellerDetails.guestName}
              </Text>
              <Text style={styles.consultantData}>
                Arrival: {itinerary.travellerDetails.arrivalDate}
              </Text>
              <Text style={styles.consultantData}>
                Contact: {itinerary.travellerDetails.contactNumber}
              </Text>
              <Text style={styles.consultantData}>
                Number of Adults: {itinerary.travellerDetails.adults}
              </Text>
              <Text style={styles.consultantData}>
                Number of Children: {itinerary.travellerDetails.children}
              </Text>
              <Text style={styles.consultantData}>
                Meal Plan: {itinerary.travellerDetails.mealPlan}
              </Text>
            </View>
            <View style={styles.section2}>
              <Text style={[styles.title, { paddingBottom: 10 }]}>
                Consultant Information
              </Text>
              <Text style={styles.consultantData}>
                Consultant Name - 999999999
              </Text>
              <Text style={styles.consultantData}>Contact - 999999999</Text>
              <Text style={styles.consultantData}>Address - ABC, Srinagar</Text>
              <Text style={styles.consultantData}>
                Email - example@gmail.com
              </Text>
              <Text style={styles.consultantData}>
                Website - www.example.com
              </Text>
            </View>
          </View>

          <View style={styles.imageContainer}>
            <Image
              src="https://td-production-images.s3.ap-south-1.amazonaws.com/Company/default%20photo_fb3e42f8-3cd3-4b8d-bf96-56423fe4c68d.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=6dc518fbae5eabc4a74297443b48070939866e9b8fd8c862f7a2c72b136ccb4f"
              style={{ height: "100%", width: "300px" }}
            />
          </View>
        </View>
      </Page>

      {/* Fourth Page - Overview & Itinerary Details */}
      <Page style={styles.page}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.overview}>Overview</Text>
            <Text style={styles.title}>
              Itinerary for - {itinerary.travellerDetails.packageNights} days
            </Text>
            <Text>Arrival: {itinerary.travellerDetails.arrivalDate}</Text>

            {itinerary.itineraryDetails.map((day) => (
              <View key={day.dayNumber} style={styles.dayContainer}>
                <Text style={styles.dayTitle}>Day {day.dayNumber}</Text>
                <Text style={styles.hotelText}>Hotel: {day.hotelName}</Text>
                {day.destinations.map((destination, index) => (
                  <View key={index} style={styles.destinationContainer}>
                    <Text style={styles.destinationText}>
                      Destination: {destination.destinationName}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          <View style={styles.imageContainer}>
            <Image
              src="https://td-production-images.s3.ap-south-1.amazonaws.com/Company/default%20photo_fb3e42f8-3cd3-4b8d-bf96-56423fe4c68d.jpg?X-Amz-Expires=604800&response-content-type=image%2Fjpeg&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAR3BJ4BUYEYXQ5HPZ%2F20250308%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20250308T124426Z&X-Amz-SignedHeaders=host&X-Amz-Signature=6dc518fbae5eabc4a74297443b48070939866e9b8fd8c862f7a2c72b136ccb4f"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </View>
        </View>
      </Page>

      {/* fifth page */}
      <Page style={styles.fifthPage}>
        {itinerary.itineraryDetails.map((day) => (
          <View key={day.dayNumber} style={styles.dayContainerFifthPage}>
            <Text style={styles.dayTitleFifthPage}>Day {day.dayNumber}</Text>
            <Text style={styles.consultantData}>
              Arrival: {itinerary.travellerDetails.arrivalDate}
            </Text>
            <Text style={styles.hotelText}>Hotel: {day.hotelName}</Text>
            {day.destinations.map((destination, index) => (
              <View key={index} style={styles.destinationContainerFifthPage}>
                <Text style={styles.destinationTextFifthPage}>
                  Destination: {destination.destinationName}
                </Text>
                <Image
                  src={destination.destinationImages}
                  style={styles.destinationImageFifthPage}
                />
              </View>
            ))}
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default ItineraryPDF;
