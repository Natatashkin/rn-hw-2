{
  /*  */
}

import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.background}
        resizeMode="cover"
        source={require("../../assets/images/podsolnuhi-rasteniya-16317.jpeg")}
      >
        <View id="form" style={styles.form}>
          <Text id="pageTitle" style={styles.pageTitle}>
            Войти
          </Text>

          <TextInput
            id="input"
            placeholder="Адрес электронной почты"
            style={[styles.input, styles.marginInput]}
          />

          <TextInput
            id="input"
            secureTextEntry
            placeholder="Пароль"
            style={styles.input}
          />
          <View id="buttonShadow" style={styles.buttonShadow} elevation={2}>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.noAccacuntText}>
            Нет аккаунта? Зарегистрироваться
          </Text>
        </View>
      </ImageBackground>

      {/* <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  form: {
    position: "absolute",
    height: 489,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formAvatar: {
    position: "absolute",
    alignSelf: "center",
    padding: 16,
    backgroundColor: "#add8e6",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 16,
  },
  defaultAvatar: {
    width: 32,
    height: 32,
  },
  pageTitle: {
    marginBottom: 32,
    fontSize: 20,
    color: "#000000",
    alignSelf: "center",
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#F6F6F6",
    color: "#696977",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E8E8E8",
    fontSize: 16,
  },
  marginInput: {
    marginBottom: 16,
  },
  button: {
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#0e3cd4",
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  buttonShadow: {
    marginTop: 10,
  },

  noAccacuntText: {
    alignSelf: "center",
    color: "#0e3cd4",
  },
});
