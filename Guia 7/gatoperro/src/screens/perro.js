import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Perro() {
  return (
    <View style={[styles.container]}>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        <View style={{ flex: 1 }}>
          <Image
            style={styles.img}
            source={{
              uri: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2021-01/Miniature%20Pinscher2.webp?itok=wfliOF-q",
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Raza:</Text>
              <Text>Pinscher miniatura</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Origen:</Text>
              <Text>Dezconocido</Text>
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
              uri: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2021-01/Bichon%20Frise2.webp?itok=5o9DuekJ",
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Raza:</Text>
              <Text>Bichón Frisé</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Origen:</Text>
              <Text>Francés</Text>
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
              uri: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2020-12/Pomeranian2.webp?itok=SV1MFoUk",
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Raza:</Text>
              <Text>Pomerania</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Origen:</Text>
              <Text>Artico</Text>
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
              uri: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2021-01/Ibizan%20Hound2.webp?itok=2ggnXkUQ",
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Raza:</Text>
              <Text>Podenco ibicenco (de pelo corto y liso)</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Origen:</Text>
              <Text>Dezconocido</Text>
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
              uri: "https://www.purina.es/sites/default/files/styles/ttt_image_690/public/2020-12/Pointer1.webp?itok=honuECSF",
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Raza:</Text>
              <Text>Pointer</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={{ fontWeight: "bold" }}>Origen:</Text>
              <Text>Dezconocido</Text>
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
