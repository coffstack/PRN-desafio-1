import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Mock } from "./data/newsMock";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text style={styles.incrementalTitle}>
            {Mock[0].topIncremental?.type === "simple" &&
              Mock[0].topIncremental!.content}
          </Text>
          <Text style={styles.title}>{Mock[0].title}</Text>
          <Text style={styles.subTitle}>{Mock[0].subTitle}</Text>
          <Image source={Mock[0].image!} style={styles.image} />
          <View style={styles.bottomDescription}>
            <Text style={styles.bottomDate}>Há {Mock[0].date}</Text>
            <View style={styles.bottomLine}></View>
            <Text style={styles.bottomCategory}>Em {Mock[0].category}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Text style={styles.incrementalTitle}>
            {Mock[1].topIncremental!.content.toString()}
          </Text>
          <Text style={styles.title}>{Mock[1].title}</Text>
          <Image source={Mock[1].image!} style={styles.image} />
          <View style={styles.bottomDescription}>
            <Text style={styles.bottomDate}>Há {Mock[1].date}</Text>
            <View style={styles.bottomLine}></View>
            <Text style={styles.bottomCategory}>Em {Mock[1].category}</Text>
          </View>
          <View style={styles.relatedBox}>
            <View>
              <Text style={styles.relatedTitle}>
                {Mock[1].related![0].title}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Text style={styles.title}>{Mock[2].title}</Text>
          <Image source={Mock[2].image!} style={styles.image} />
          <View style={styles.bottomDescription}>
            <Text style={styles.bottomDate}>Há {Mock[2].date}</Text>
            <View style={styles.bottomLine}></View>
            <Text style={styles.bottomCategory}>Em {Mock[2].category}</Text>
          </View>
          <View style={styles.relatedBox}>
            <Text style={styles.relatedTitle}>{Mock[2].related![0].title}</Text>

            <Text style={styles.relatedTitle}>{Mock[2].related![1].title}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Text style={styles.incrementalTitleEspecial}>
            {Mock[3].topIncremental!.content.toString().toUpperCase()}
          </Text>
          <Text style={styles.title}>{Mock[3].title}</Text>
          <Image source={Mock[3].image!} style={styles.image} />
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Text style={styles.incrementalTitle}>
            {Mock[4].topIncremental?.type === "soccer" &&
              Mock[4].topIncremental.content.additionalTitle}
          </Text>
          <View style={styles.gameResult}>
            <View style={styles.home}>
              <Text style={styles.TeamAbbreviation}>
                {Mock[4].topIncremental?.type === "soccer" &&
                  Mock[4].topIncremental.content.homeTeam.abbreviation}
              </Text>
              <Image
                source={
                  Mock[4].topIncremental?.type === "soccer"
                    ? Mock[4].topIncremental.content.homeTeam.symbol
                    : require("./assets/teams/DYJ.png")
                }
                style={styles.symbol}
              />
            </View>
            <View style={styles.score}>
              <Text style={styles.textScore}>
                {Mock[4].topIncremental?.type === "soccer" &&
                  Mock[4].topIncremental.content.homeTeam.goalsScored}
              </Text>
              <Text style={styles.divisorScore}>x</Text>
              <Text style={styles.textScore}>
                {Mock[4].topIncremental?.type === "soccer" &&
                  Mock[4].topIncremental.content.visitingTeam.goalsScored}
              </Text>
            </View>
            <View style={styles.visiting}>
              <Image
                source={
                  Mock[4].topIncremental?.type === "soccer"
                    ? Mock[4].topIncremental.content.visitingTeam.symbol
                    : require("./assets/teams/BOT.png")
                }
                style={styles.symbol}
              />
              <Text style={styles.TeamAbbreviation}>
                {Mock[4].topIncremental?.type === "soccer" &&
                  Mock[4].topIncremental.content.visitingTeam.abbreviation}
              </Text>
            </View>
          </View>
          <Text style={styles.title}>{Mock[4].title}</Text>
          <Text style={styles.subTitle}>{Mock[4].subTitle}</Text>
          <Image source={Mock[4].image!} style={styles.image} />
          <View style={styles.bottomDescription}>
            <Text style={styles.bottomDate}>Há {Mock[4].date}</Text>
            <View style={styles.bottomLine}></View>
            <Text style={styles.bottomCategory}>Em {Mock[4].category}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View>
          <Text style={styles.incrementalTitle}>
            {Mock[5].topIncremental?.type === "simple" &&
              Mock[5].topIncremental!.content}
          </Text>
          <Text style={styles.title}>{Mock[5].title}</Text>
          <View style={styles.bottomDescription}>
            <Text style={styles.bottomDate}>Há {Mock[5].date}</Text>
            <View style={styles.bottomLine}></View>
            <Text style={styles.bottomCategory}>Em {Mock[5].category}</Text>
          </View>
          <View style={styles.relatedBox}>
            <Text style={styles.relatedTitle}>{Mock[5].related![0].title}</Text>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>{Mock[6].title}</Text>
        <Image source={Mock[6].image!} style={styles.image} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    flex: 1,
  },
  card: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#222222",
    marginBottom: 25,
  },
  incrementalTitle: {
    color: "#626262",
    fontSize: 17,
    fontWeight: "500",
    marginTop: 5,
  },
  incrementalTitleEspecial: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 5,
    backgroundColor: "#814001",
    paddingVertical: 3,
    paddingHorizontal: 7,
    textAlign: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 10,
  },
  subTitle: {
    color: "#626262",
    fontSize: 16,
    fontWeight: "500",
  },
  image: {
    width: "100%",
    height: 250,
    marginTop: 25,
    borderRadius: 7,
  },
  bottomDescription: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 13,
  },
  bottomDate: {
    color: "#626262",
    fontSize: 14,
  },
  bottomLine: {
    width: 15,
    height: 1,
    backgroundColor: "#626262",
    marginTop: 3,
  },
  bottomCategory: {
    color: "#626262",
    fontSize: 14,
  },
  relatedBox: {
    marginTop: 15,
  },
  relatedTitle: {
    color: "#FDFDFD",
    fontSize: 16,
    fontWeight: "600",
    borderTopWidth: 1,
    borderTopColor: "#414141",
    paddingVertical: 12,
  },
  gameResult: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#414141",
    alignItems: "center",
  },
  home: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  visiting: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  score: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  symbol: {
    width: 40,
    height: 40,
  },
  TeamAbbreviation: {
    color: "#8A8A8A",
    fontSize: 14,
  },
  textScore: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "600",
  },
  divisorScore: {
    color: "#8A8A8A",
  },
});
