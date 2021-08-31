import React from "react";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native";

let camera;

export const CameraButton = ({ setStartCamera, children }) => {
  const startCameraHandler = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    }
  };

  return (
    <TouchableOpacity onPress={startCameraHandler}>{children}</TouchableOpacity>
  );
};

export const CameraView = () => {
  return (
    <Camera
      style={{ flex: 1, width: "100%" }}
      ref={(r) => {
        camera = r;
      }}
    ></Camera>
  );
};
