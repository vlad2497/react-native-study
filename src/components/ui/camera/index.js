import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

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

export const CameraView = ({ handleNewPhoto }) => {
  const takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    const asset = await MediaLibrary.createAssetAsync(photo.uri);
    handleNewPhoto(asset.uri);
  };

  return (
    <Camera
      style={{ flex: 1, width: "100%" }}
      ref={(r) => {
        camera = r;
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          flex: 1,
          width: "100%",
          padding: 20,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            flex: 1,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={takePicture}
            style={{
              width: 70,
              height: 70,
              bottom: 0,
              borderRadius: 50,
              backgroundColor: "#fff",
            }}
          />
        </View>
      </View>
    </Camera>
  );
};
