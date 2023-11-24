// Importing necessary dependencies and components from React and other libraries
import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

const printContent = ({ flashcards }) => {
  return (
    <Document>
      <Page size="A4" style={{ padding: 30 }}>
        <View style={{ flexDirection: "column", marginBottom: 20 }}>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
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
            <Text style={{ fontSize: 18, marginBottom: 20, color: "black" }}>
              {flashcards.groupdescription}
            </Text>
          </View>
          <View style={{ flexDirection: "column", alignItems: "left" }}>
            {flashcards.cards.map((card, index) => (
              <View key={index} style={{ marginBottom: 20 }}>
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
                <View style={{ flexDirection: "row" }}>
                  <Image
                    src={card?.cardImage}
                    style={{
                      width: "180px",
                      height: "auto",
                      marginRight: 10,
                    }}
                  />
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
export default printContent;
