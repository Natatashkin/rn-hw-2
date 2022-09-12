import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { AppText, InputTextField, Button } from "../../components";
import { LOGIN_FORM_DEFAULT_FIELDS, FORM_FIELD_NAMES } from "../constants";
import useKeyboardStatus from "../../hooks/useKeyboardStatus";

export default function LoginScreen() {
  const { keyboardStatus, handleKeyboardHide } = useKeyboardStatus();
  const [formValues, setFormValues] = useState(LOGIN_FORM_DEFAULT_FIELDS);

  const handleInputChange = (value, keyField) => {
    setFormValues((prevData) => {
      return {
        ...prevData,
        [keyField]: value,
      };
    });
  };

  const handleGetFormData = () => {
    console.log(formValues);
    setFormValues(LOGIN_FORM_DEFAULT_FIELDS);
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View
          style={[
            styles.form,
            keyboardStatus
              ? styles.formScrollPaddings
              : styles.formVerticalPaddings,
          ]}
        >
          <ScrollView style={keyboardStatus && styles.formScrollContainer}>
            <Text style={[styles.pageTitle]}>Увійти</Text>
            <InputTextField
              placeholder="Адреса електронної пошти"
              marginBottom
              value={formValues.email}
              onChangeText={(text) =>
                handleInputChange(text, FORM_FIELD_NAMES.email)
              }
            />
            <InputTextField
              placeholder="Пароль"
              secureTextEntry
              value={formValues.password}
              onChangeText={(text) =>
                handleInputChange(text, FORM_FIELD_NAMES.password)
              }
            />
            <Button title="Увійти" onPress={handleGetFormData} margin />
            <AppText textStyle={styles.noAccacuntText}>
              Немає аккаунта? Зареєструватися
            </AppText>
          </ScrollView>
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
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },

  formVerticalPaddings: {
    paddingVertical: 32,
  },

  formScrollPaddings: {
    paddingTop: 32,
    paddingBottom: 0,
  },

  formScrollContainer: {
    maxHeight: 230,
  },

  pageTitle: {
    marginBottom: 32,
    fontSize: 20,
    color: "#000000",
    alignSelf: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },

  noAccacuntText: {
    alignSelf: "center",
    color: "#0e3cd4",
  },
});
