// Importing necessary dependencies and components from React and other libraries
import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

// Functional component printContent, takes flashcards as a prop
const printContent = ({ flashcards }) => {
  // Render PDF content
  return (
    // Root Document component
    <Document>
      {/* Page component with A4 size and styling */}
      <Page size="A4" style={{ padding: 30 }}>
        {/* Main container View with column layout and bottom margin */}
        <View style={{ flexDirection: "column", marginBottom: 20 }}>
          {/* Inner container View with column layout and centered alignment */}
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            {/* Title text for the flashcard with styling */}
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                marginBottom: 10,
                color: "black",
              }}
            >
              FLASHCARD
            </Text>
            {/* Group name text with styling */}
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                marginBottom: 10,
                color: "dodgerblue",
              }}
            >
              {flashcards.groupname}
            </Text>
            {/* Group description text with styling */}
            <Text style={{ fontSize: 18, marginBottom: 20, color: "black" }}>
              {flashcards.groupdescription}
            </Text>
          </View>
          {/* Container View for flashcard items with left alignment */}
          <View style={{ flexDirection: "column", alignItems: "left" }}>
            {/* Mapping through flashcard items and rendering each */}
            {flashcards.cards.map((card, index) => (
              <View key={index} style={{ marginBottom: 20 }}>
                {/* Card name text with styling */}
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginBottom: 10,
                    color: "red",
                  }}
                >
                  {card.cardname}
                </Text>
                {/* Container View for card details with row layout */}
                <View style={{ flexDirection: "row" }}>
                  {/* Image component for card with styling */}
                  <Image
                    src={card?.cardImage}
                    style={{
                      width: "180px",
                      height: "auto",
                      marginRight: 10,
                    }}
                  />
                  {/* Text component for card description with flexible width */}
                  <Text style={{ flex: 1, fontSize: 14 }}>
                    {card.carddescription}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

// Exporting printContent component as default
export default printContent;
