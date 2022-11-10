import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Gato() {
  return (
    <View style={[styles.container]}>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.img}
            source={{
              uri: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2021-01/Bengal.1.webp?itok=WI6ibao4",
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Raza:</Text>
              <Text>Bengalí</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Origen:</Text>
              <Text>EE. UU.</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "column", flexWrap: "wrap" }}></View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.img}
            source={{
              uri: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2021-01/Abyssinian.1.webp?itok=bCrcqY3V",
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Raza:</Text>
              <Text>Abisinio</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Origen:</Text>
              <Text>Abisinia (Etiopía)</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "column", flexWrap: "wrap" }}></View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.img}
            source={{
              uri: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2021-01/Chinchilla.2.webp?itok=MP9itxwH",
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Raza:</Text>
              <Text>Chinchilla</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Origen:</Text>
              <Text>Inglaterra</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "column", flexWrap: "wrap" }}></View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.img}
            source={{
              uri: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2021-01/Munchkin.1.webp?itok=QKLkwM1h",
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Raza:</Text>
              <Text>Munchkin</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Origen:</Text>
              <Text>EE. UU.</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "column", flexWrap: "wrap" }}></View>
      </View>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.img}
            source={{
              uri: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2021-01/Savannah.2.webp?itok=Kilg4EMz",
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Raza:</Text>
              <Text>Savannah</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Origen:</Text>
              <Text>EE. UU.</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "column", flexWrap: "wrap" }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    marginLeft: 5,
    width: 100,
    height: 100,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
