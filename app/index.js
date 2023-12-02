import { Text, View } from "react-native";

export default function Home({ abc }) {
  console.log("Test:", abc);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>The value of prop abc is: {abc}</Text>
    </View>
  );
}
