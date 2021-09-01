import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";

import ImagePicker from "components/ui/image-picker";
import { CameraButton, CameraView } from "components/ui/camera";
import Button from "components/ui/button";
import {
  createUsersTable,
  getUsers,
  createUser,
  updateUser,
} from "../../db/users";

import { styles } from "./styles";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [startCamera, setStartCamera] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    createUsersTable();
  }, []);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  useEffect(() => {
    if (users && users?.length === 0) {
      createUser("Владислав", "");
    }
  }, [users]);

  useEffect(() => {
    if (users && users?.length) {
      setSelectedImage({ localUri: users[0].image });
    }
  }, [users]);

  const savePhotoToDb = (imageUri) => {
    updateUser(1, imageUri);
  };

  const handleNewPhoto = (imageUri) => {
    setStartCamera(false);
    setSelectedImage({ localUri: imageUri });
    savePhotoToDb(1, imageUri);
  };

  if (startCamera) return <CameraView handleNewPhoto={handleNewPhoto} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Работа с фото (ссылка хранится в бд)</Text>
      <View style={styles.photoContainer}>
        <View style={styles.photoContainerLeft}>
          <ImagePicker
            setSelectedImage={setSelectedImage}
            onSuccess={savePhotoToDb}
          >
            <Button>с устройства</Button>
          </ImagePicker>
          <CameraButton setStartCamera={setStartCamera}>
            <Button>новое</Button>
          </CameraButton>
        </View>
        <View style={styles.photoContainerRight}>
          {selectedImage?.localUri ? (
            <Image
              source={{ uri: selectedImage?.localUri || "" }}
              style={styles.image}
            />
          ) : (
            <View style={styles.image}></View>
          )}
        </View>
      </View>
      <Text style={styles.title}>Работа с геолокацией</Text>
      <Text style={styles.title}>Версия приложения 1.0.0</Text>
    </View>
  );
};

export default Profile;
