import React from "react";
import { TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default ({ setSelectedImage, children, onSuccess }) => {
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      console.log("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    } else {
      setSelectedImage({ localUri: pickerResult.uri });
      onSuccess(pickerResult.uri);
    }
  };

  return (
    <TouchableOpacity onPress={openImagePickerAsync}>
      {children}
    </TouchableOpacity>
  );
};
