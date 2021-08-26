import React, { useState, useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { View, Image } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { AppWithNavigation } from "navigation";

import TextButton from "components/ui/text-button";
import Button from "components/ui/button";
import TextInput from "components/ui/input";
import authImage from "../../../assets/auth-logo.png";
import { styles } from "./styles";

const Auth = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [biometricSuccess, setBiometricSuccess] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const checkBiometricSupport = async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    };
    checkBiometricSupport();
  }, []);

  const handleBiometricAuth = async () => {
    const biometricResult = await LocalAuthentication.authenticateAsync({
      promptMessage: "Сканирование отпечатка",
    });
    if (biometricResult.success) {
      setBiometricSuccess(true);
    } else {
      setBiometricSuccess(false);
    }
  };

  if (biometricSuccess)
    return (
      <PaperProvider>
        <AppWithNavigation />
      </PaperProvider>
    );

  return (
    <View style={styles.wrapper}>
      <Image source={authImage} style={styles.logo} />
      <View style={styles.inputWrapper}>
        <TextInput
          label="Логин"
          value={login}
          onChangeText={(text) => setLogin(text)}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          label="Пароль"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={() => setBiometricSuccess(true)}>Войти</Button>
      </View>
      {isBiometricSupported ? (
        <View style={styles.textButtonWrapper}>
          <TextButton onPress={handleBiometricAuth}>
            Вход по отпечатку
          </TextButton>
        </View>
      ) : null}
    </View>
  );
};

export default Auth;
