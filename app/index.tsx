import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
const BREAKPOINTS = {
  tablet: 768,
  largeTablet: 1024,
};

const featureCards = [
  {
    title: "Dashboard",
    description: "Ringkasan singkat performa bisnis Anda.",
    icon: "pie-chart",
  },
  {
    title: "Calendar",
    description: "Atur jadwal meeting dan to-do secara terstruktur.",
    icon: "calendar",
  },
  {
    title: "Tasks",
    description: "Lacak progres tugas tim secara real-time.",
    icon: "check-square",
  },
  {
    title: "Messages",
    description: "Komunikasi cepat antar anggota tim.",
    icon: "message-square",
  },
];

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height; 
  const isTablet = width >= BREAKPOINTS.tablet;
  const isLargeTablet = width >= BREAKPOINTS.largeTablet;
  const isMedium = isTablet && !isLargeTablet && !isLandscape; 
  const isExpansive = isLargeTablet || (isTablet && isLandscape);

  const iconSize = isExpansive ? 32 : isMedium ? 28 : 24;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          isExpansive
            ? styles.containerLarge
            : isMedium
            ? styles.containerTablet
            : styles.containerMobile,
        ]}
      >
        <View
          style={[
            styles.hero,
            isExpansive || isLandscape ? styles.heroLandscape : styles.heroPortrait,
          ]}
        >
          <View style={styles.heroContent}>
            <Text style={styles.overline}>
              {isLandscape ? "Landscape" : "Portrait"} •{" "}
              {isExpansive ? "Large" : isMedium ? "Tablet" : "Mobile"}
            </Text>
            <Text style={styles.title}>Dashboard Responsive</Text>
            <Text style={styles.subtitle}>
              Layout menyesuaikan orientasi dan lebar layar secara otomatis.
            </Text>
          </View>
        </View>
        <View style={styles.cardGrid}>
          {featureCards.map((card) => (
            <View
              key={card.title}
              style={[
                styles.card,
                isExpansive
                  ? styles.cardQuarter
                  : isMedium
                  ? styles.cardHalf
                  : styles.cardFull,
              ]}
            >
              <View style={styles.cardHeader}>
                <View style={styles.iconContainer}>
                  <Feather
                    name={card.icon as any}
                    size={iconSize}
                    color="#8AB4FF"
                  />
                </View>
                <Text style={styles.cardTitle}>{card.title}</Text>
              </View>
              <Text style={styles.cardDesc}>{card.description}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0B1120",
  },
  container: {
    flexGrow: 1,
    gap: 24,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  containerMobile: {
    alignItems: "stretch",
  },
  containerTablet: {
    maxWidth: 720,
    alignSelf: "center",
    width: "100%",
  },
  containerLarge: {
    maxWidth: 1200,
    alignSelf: "center",
    width: "100%",
  },
  hero: {
    borderRadius: 24,
    padding: 24,
    backgroundColor: "#111C33",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.07)",
  },
  heroPortrait: {
    alignItems: "flex-start",
  },
  heroLandscape: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heroContent: {
    flex: 1, 
  },
  overline: {
    color: "#8AB4FF",
    letterSpacing: 1,
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
  },
  subtitle: {
    color: "#B8C6E3",
    fontSize: 16,
    marginTop: 8,
  },
  cardGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },

  card: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#162544",
    justifyContent: "flex-start",
  },
  cardFull: {
    width: "100%",
  },
  cardHalf: {
    width: "47%", 
    flexGrow: 1,
  },
  cardQuarter: {
    width: "23%", 
    flexGrow: 1,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  iconContainer: {
    padding: 10,
    backgroundColor: "rgba(138, 180, 255, 0.1)",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    flexShrink: 1,
  },
  cardDesc: {
    color: "#B8C6E3",
    fontSize: 14,
    lineHeight: 20,
  },
});