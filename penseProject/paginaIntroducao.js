import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground, Dimensions, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import bgImage from "./assets/fundo1.png";

const { width, height } = Dimensions.get("window");

export default function PaginaIntroducao() {
  return (
    <ImageBackground
      source={bgImage}
      style={[styles.background, { width, height }]}
    >
      <SafeAreaView style={styles.container}>
        
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

          {/* TÍTULO */}
          <View style={styles.header}>
            <Text style={styles.title}>Seja bem vindo{"\n"}ao Pense!</Text>
            <Image 
              source={require("./img/iconGraduation.png")} 
              style={styles.icon}
              resizeMode="contain"
            />
          </View>

          {/* Seção 1 */}
          <View style={styles.sectionContainer}>
            <View style={styles.redBar} />
            <View style={styles.textBlock}>
              <Text style={styles.sectionTitle}>O que vamos fazer?</Text>
              <Text style={styles.sectionText}>
                Vamos utilizar o método Naive Bayes como uma ferramenta de apoio
                para ajudar você a tomar uma decisão após se formar na faculdade.
                A ideia é mostrar como esse modelo probabilístico pode analisar
                diferentes fatores, como interesses, oportunidades e preferências
                para indicar caminhos possíveis.
              </Text>
            </View>
          </View>

          {/* Seção 2 */}
          <View style={styles.sectionContainer}>
            <View style={styles.redBar} />
            <View style={styles.textBlock}>
              <Text style={styles.sectionTitle}>O que é o Naive Bayes?</Text>
              <Text style={styles.sectionText}>
                Naive Bayes é um algoritmo de aprendizado de máquina supervisionado
                que usa o Teorema de Bayes para tarefas de classificação, assumindo
                que as características dos dados são independentes entre si.
                Essa suposição simplifica o cálculo, tornando o algoritmo rápido,
                eficiente e fácil de implementar, além de ser útil em tarefas como
                classificação de texto e filtragem de spam.
              </Text>
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>

      {/* BOTÃO */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log("Próximo pressionado")}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

// ---------------- ESTILOS ----------------

const styles = StyleSheet.create({
  background: {
    resizeMode: "cover",
    flex: 1,
  },

  container: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 180,
  },

  header: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },

  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },

  sectionContainer: {
    flexDirection: "row",
    marginTop: 30,
    width: "100%",
  },

  redBar: {
    width: 4,
    backgroundColor: "red",
    borderRadius: 10,
    marginRight: 10,
  },

  textBlock: {
    flex: 1,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  sectionText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#222",
  },

  // --------------- BOTÃO ---------------
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    marginBottom: 80,
    justifyContent: "center",
  },

  button: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "black",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

