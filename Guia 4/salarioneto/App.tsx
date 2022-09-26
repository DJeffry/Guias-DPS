/**
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from "react";
import colors from "./src/utils/colors";
import Form from "./src/components/Form";
import Footer from "./src/components/Footer";
import Result from "./src/components/Result";

import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [salario, setSalario] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (salario) calculate();
    else reset();
  }, [salario]);

  const calculate = () => {
    reset();
    if (!salario) {
      setErrorMessage("Añade la cantidad que quieres solicitar");
    } else {
      const deducciones = salario * (0.03 + 0.04 + 0.05);
      const neto = salario - deducciones;
      setTotal({
        salarioneto: neto.toFixed(2),
      });
    }
  };

  const reset = () => {
    setErrorMessage("");
    setTotal(null);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.Header}>
        <Text style={styles.HeadApp}>Calculador de salario</Text>
        <Form setSalario={setSalario} />
      </SafeAreaView>
      <View>
        <Result
        salario = {salario}
          total={total}
          errorMessage={errorMessage}
        />
      </View>
      <Footer></Footer>
    </>
  );
}
const styles = StyleSheet.create({
  Header: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
  },
  HeadApp: {
    fontSize: 25,
    fontWeigth: "bold",
    color: "#fff",
    marginTop: 15,
  },
});
