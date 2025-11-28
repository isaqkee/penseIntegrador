// WelcomeScreen.js
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageBackground, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importando o hook de navegação

// Importe a imagem de fundo que você deseja usar, no caso, bgImage
import bgImage from "./assets/fundo1.png"; 

const { width, height } = Dimensions.get("window");

export default function WelcomeScreen() {
  const navigation = useNavigation(); // Hook de navegação

  // Função para navegar para a próxima tela
  const navigateToPaginaIntroducao = () => {
    navigation.navigate("PaginaIntroducao");
  };

  return (
    <ImageBackground
      source={bgImage}
      style={[styles.background, { width, height }]}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("./img/logoWhite.png")}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={navigateToPaginaIntroducao}>
          <Text style={styles.buttonText}>Vamos Começar</Text>
        </TouchableOpacity>

        <View style={styles.bottomBars}>
          <Image
            source={require("./img/Details.png")}
            style={styles.bottomBarsImage}
            resizeMode="contain"
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    resizeMode: "cover",
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  logoContainer: {
    alignItems: "center",
  },
  logoImage: {
    width: 300,
    height: 220,
  },
  button: {
    position: "absolute",
    bottom: 190,  
    backgroundColor: "black",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  bottomBars: {
    marginTop: 168,
  },
  bottomBarsImage: {
    width: "100%", // Ajusta a largura da imagem para a tela
  },
});
