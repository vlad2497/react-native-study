import React, { useState, useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import { ScrollView, Text, Button, Image, Dimensions } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { AppWithNavigation } from "navigation";
import authImage from "../../../assets/auth-logo.jpg";

const screen = Dimensions.get("screen");

const Auth = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [biometricSuccess, setBiometricSuccess] = useState(false);

  useEffect(() => {
    const checkBiometricSupport = async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
      if (compatible) handleBiometricAuth();
    };
    checkBiometricSupport();
  }, []);

  const handleBiometricAuth = async () => {
    /*const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    if (!savedBiometrics)
      return Alert.alert(
        "Биометрическая запись не найдена",
        "Пожалуйста, подтвердите свою личность с помощью пароля",
        "OK",
        () => fallBackToDefaultAuth()
      );*/
    const biometricResult = await LocalAuthentication.authenticateAsync();
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
    <ScrollView style={{ flex: 1 }}>
      <Image
        source={authImage}
        style={{
          width: screen.width,
          height: screen.height - 200,
          resizeMode: "cover",
        }}
      />
      <Text>Авторизация</Text>
      <Text>
        {biometricSuccess ? "Биометрия успешна" : "Биометрия не успешна"}
      </Text>
      <Button title="Вход по отпечатку" onPress={handleBiometricAuth} />
      <Text>
        {isBiometricSupported
          ? "Your device is compatible with Biometrics"
          : "Face or Fingerprint scanner is available on this device"}
      </Text>
    </ScrollView>
  );
};

export default Auth;
