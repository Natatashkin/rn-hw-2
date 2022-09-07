import React, { useEffect, useState, useMemo } from "react";
import { TextInput, View, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const InputText = ({ placeholder, marginBottom, secureTextEntry = false }) => {
  const [inputFocus, setInputFocus] = useState(false);
  const [activeIcon, setActiveIcon] = useState(false);

  const toggleIconPress = () => {
    setActiveIcon(!activeIcon);
  };

  const handleIconPress = () => {
    if (!inputFocus) {
      return;
    }
    toggleIconPress();
  };
  const handleInputBlur = () => {
    if (activeIcon) {
      setActiveIcon(false);
    }
    setInputFocus(false);
  };
  const isInputOnFocus = useMemo(
    () => (inputFocus ? styles.inputOnFocus : styles.inputWhithoutFocus),
    [inputFocus, styles]
  );
  const isMarginBottom = useMemo(
    () => marginBottom && styles.marginInput,
    [marginBottom, styles]
  );

  return (
    <View style={[styles.inputContainer, isInputOnFocus, isMarginBottom]}>
      <TextInput
        autoFocus={inputFocus}
        secureTextEntry={!activeIcon && secureTextEntry}
        placeholder={placeholder}
        style={[styles.input]}
        onFocus={(e) => setInputFocus(true)}
        onBlur={handleInputBlur}
      />
      {secureTextEntry && (
        <Pressable style={styles.icon} onPress={handleIconPress}>
          {activeIcon ? (
            <Ionicons
              name="eye-off-outline"
              size={24}
              color={styles.iconActiveColor.color}
            />
          ) : (
            <Ionicons
              name="eye-outline"
              size={24}
              color={styles.iconColor.color}
            />
          )}
        </Pressable>
      )}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 16,
    paddingVertical: 16,
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

  icon: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },

  iconColor: {
    color: "#696977",
  },
  iconActiveColor: {
    color: "#0e3cd4",
  },
});
