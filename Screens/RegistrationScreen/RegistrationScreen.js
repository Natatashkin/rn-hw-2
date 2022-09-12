import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import useKeyboardStatus from "../../hooks/useKeyboardStatus";
import { InputTextField, Button, AppText } from "../../components";
import {
  REGISTRATION_FORM_DEFAULT_FIELDS,
  FORM_FIELD_NAMES,
} from "../constants";
import useAdaptiveHeight from "../../hooks/useAdaptiveHeight";

export default function RegistrationScreen() {
  const { keyboardStatus, handleKeyboardHide } = useKeyboardStatus();
  const { adaptiveHeight } = useAdaptiveHeight();
  const [formValues, setFormValues] = useState(
    REGISTRATION_FORM_DEFAULT_FIELDS
  );

  const formPaddings = keyboardStatus
    ? styles.formScrollPaddings
    : styles.formVerticalPaddings;

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
    setFormValues(REGISTRATION_FORM_DEFAULT_FIELDS);
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <KeyboardAvoidingView behavior={null} style={styles.container}>
        <View
          style={{
            height: adaptiveHeight,
          }}
        >
          <View style={styles.formAvatar}>
            <Feather
              name="user"
              size={90}
              color="#0e3cd4"
              style={styles.defaultAvatarImage}
            />
            <AntDesign
              name="pluscircleo"
              size={25}
              color="#0e3cd4"
              style={styles.iconPlus}
            />
          </View>
          <View
            style={[
              styles.form,
              formPaddings,
              keyboardStatus && styles.scrollFormView,
            ]}
          >
            <ScrollView>
              <Text style={styles.pageTitle}>Реєстрація</Text>
              <InputTextField
                placeholder="Логін"
                marginBottom
                value={formValues.login}
                onChangeText={(text) =>
                  handleInputChange(text, FORM_FIELD_NAMES.login)
                }
              />
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
              <Button
                title="Зареєструватися"
                onPress={handleGetFormData}
                margin
              />

              <AppText textStyle={styles.noAccacuntText}>
                Вже є аккаунт? Увійти
              </AppText>
            </ScrollView>
          </View>
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
    height: "100%",
    paddingHorizontal: 16,
    marginTop: 60,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#ffffff",
  },
  scrollFormView: {
    height: 300,
  },
  formVerticalPaddings: {
    paddingTop: 92,
    paddingBottom: 32,
  },

  formScrollPaddings: {
    paddingTop: 76,
    paddingBottom: 16,
  },

  formAvatar: {
    position: "absolute",
    top: 0,
    alignSelf: "center",
    backgroundColor: "#FBCD02",
    borderRadius: 16,
    width: 120,
    height: 120,
    justifyContent: "center",
    elevation: 4,
    zIndex: 1,
  },
  defaultAvatarImage: {
    alignSelf: "center",
  },
  iconPlus: {
    position: "absolute",
    right: -13,
    bottom: 14,
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
