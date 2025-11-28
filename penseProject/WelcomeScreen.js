// WelcomeScreen.js
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function WelcomeScreen({ }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("./img/logoWhite.png")} 
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Vamos Começar</Text>
      </TouchableOpacity>

      <View style={styles.bottomBars}>
        <Image
          source={require("./img/Details.png")} 
          style={styles.bottomBars}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 40,
  },

  logoImage: {
    width: 240,
    height: 120,
  },

  title: {
    fontSize: 38,
    fontWeight: "bold",
    marginTop: 10,
  },

  button: {
  position: "absolute",
  bottom: 150,  
  backgroundColor: "black",
  paddingVertical: 14,
  paddingHorizontal: 40,
  borderRadius: 30,
  cursor: "pointer",
},

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  bottomBars: {
    marginTop: 168,
  },
});
