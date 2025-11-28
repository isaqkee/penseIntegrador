import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Dimensions, SafeAreaView, TouchableOpacity, } from "react-native";
import bgImage from "./assets/fundo1.png";

const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <ImageBackground
      source={bgImage}
      style={[styles.background, { width, height }]}
    >
      <SafeAreaView style={styles.container}>
        {/* Conteúdo do meio da tela pode ir aqui */}
      </SafeAreaView>

      {/* Botão na parte inferior */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Próximo pressionado")}
        >
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
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
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 80, // distancia do final da tela
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: 180,
    alignItems: "center", // centraliza horizontalmente
    justifyContent: "center", // centraliza verticalmente
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center", // garante alinhamento do texto
  },
});
