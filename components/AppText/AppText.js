import { Text, StyleSheet } from "react-native";
import { MAIN_TEXT_FONT } from "../constants";

const AppText = ({ children, textStyle }) => {
  return <Text style={[MAIN_TEXT_FONT, textStyle]}>{children}</Text>;
};

export default AppText;

const styles = StyleSheet.create({
  mainAppFont: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
});
