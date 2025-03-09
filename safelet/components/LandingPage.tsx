import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function LandingPage() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/safelet-bg.png")} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Image
          source={require("../assets/images/safelet-logo.png")}
          style={styles.logo}
        />
        <Text style={styles.subtitle}>
          Safely track and monitor your child's location, movements, and
          well-being in real time.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.shadow]}
            onPress={() => router.push("/signup")}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.buttonOutline, styles.shadow]}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.buttonOutlineText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 350,
    height: 350,
    marginBottom: -10,
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 100,
    textAlign: "center",
    paddingHorizontal: 40,
  }, 
  buttonContainer: { width: "80%" },
  button: {
    backgroundColor: "#3993DD",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: { color: "#fff", fontSize: 16 },
  buttonOutline: {
    borderColor: "#ffffff",
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutlineText: { color: "#FFFFFF", fontSize: 16 },
  shadow: {
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 4, 
    elevation: 5, 
  },
});
