import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  NativeModules,
} from "react-native";
import { InputText } from "../../components/InputText";
import IconEye from "../../assets/icons/eye.svg";
import IconEyeOff from "../../assets/icons/eye-off.svg";

const { StatusBarManager } = NativeModules;

export default function LoginScreen() {
  const [keyboardStatus, setKeyboardStatus] = useState(undefined);

  const handleKeyboardHide = () => {
    setKeyboardStatus(false);
    Keyboard.dismiss();
  };

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={[styles.form, keyboardStatus && styles.formOpenKeyboard]}>
          <Text style={styles.pageTitle}>Войти</Text>

          <InputText placeholder="Адрес электронной почты" marginBottom />
          <InputText placeholder="Пароль" secureTextEntry />

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.button, styles.buttonMargin]}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>

          <Text style={styles.noAccacuntText}>
            Нет аккаунта? Зарегистрироваться
          </Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },

  form: {
    height: "70%",
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },
  // formAvatar: {
  //   alignSelf: "center",
  //   padding: 16,
  //   backgroundColor: "#add8e6",
  //   borderRadius: 50,
  //   overflow: "hidden",
  //   marginBottom: 16,
  // },
  // defaultAvatar: {
  //   width: 32,
  //   height: 32,
  // },
  pageTitle: {
    marginBottom: 32,
    fontSize: 20,
    color: "#000000",
    alignSelf: "center",
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
  },
  inputOnFocus: {
    borderColor: "#0e3cd4",
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  inputWhithoutFocus: {
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    color: "#696977",
  },

  marginInput: {
    marginBottom: 16,
  },

  button: {
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#0e3cd4",
    borderRadius: 100,
    elevation: 4,
  },

  buttonMargin: {
    marginTop: 43,
    marginBottom: 16,
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  // buttonShadow: {
  //   marginTop: 10,
  // },

  noAccacuntText: {
    alignSelf: "center",
    color: "#0e3cd4",
  },
});
