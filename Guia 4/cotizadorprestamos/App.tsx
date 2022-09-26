/**
 * @format
 * @flow strict-local
 */
import React, { useEffect } from "react";
import colors from "./src/utils/colors";
import Forms from "./src/components/Forms";
import Footer from "./src/components/Footer";
import Result from "./src/components/result";
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import { useState } from "react";
export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonth] = useState(null);
  const [total, setTotal] = useState(null);
  const [neto, setNeto] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (capital && interest && months) calculate();
    else reset();
  }, [capital, interest, months]);
  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage("Añade la cantidad que quieres solicitar");
    } else if (!interest) {
      setErrorMessage("Añade el interes del prestamos");
    } else if (!months) {
      setErrorMessage("Seleccióna los meses a pagar");
    } else {
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      const desc = (fee) * (0.03 + 0.04 + 0.05);
      setNeto(((fee) - desc).toFixed(2).replace(".", ","));
      setTotal({
        monthlyFee: fee.toFixed(2).replace(".", ","),
        totalPayable: (fee * months).toFixed(2).replace(".", ","),
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
        <Text style={styles.HeadApp}>Cotizador de prestamos</Text>
        <Forms
          setCapital={setCapital}
          setInterest={setInterest}
          setMonth={setMonth}
        />
      </SafeAreaView>
      <Result
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
        neto={neto}
      />
      <Footer calculate={calculate}></Footer>
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
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
  safeArea: {
    height: 290,
    alignItems: "center",
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
});
