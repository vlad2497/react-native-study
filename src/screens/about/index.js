import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, Image } from "react-native";
import MapView from "react-native-maps";

import ImagePicker from "components/ui/image-picker";
import { CameraButton, CameraView } from "components/ui/camera";
import Button from "components/ui/button";
import useGetGeolocation from "hooks/useGetGeolocation";
import useSubscribeForPushNotifications from "hooks/useSubscribeForPushNotifications";
import useShare from "hooks/useShare";

import {
  createUsersTable,
  getUsers,
  createUser,
  updateUser,
} from "../../db/users";

import { styles } from "./styles";

let Marker = MapView.Marker;

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [startCamera, setStartCamera] = useState(false);
  const [users, setUsers] = useState(null);
  const { location, getGeolocation } = useGetGeolocation();
  const { sendPush } = useSubscribeForPushNotifications();
  const { onShare } = useShare();

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
    savePhotoToDb(imageUri);
  };

  if (startCamera) return <CameraView handleNewPhoto={handleNewPhoto} />;

  return (
    <ScrollView style={styles.container}>
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
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={{
            latitude: location?.coords?.latitude || 37.78825,
            longitude: location?.coords?.longitude || -122.4324,
            latitudeDelta: location?.coords?.latitude ? 0.01 : 0.0922,
            longitudeDelta: location?.coords?.latitude ? 0.01 : 0.0421,
          }}
        >
          {location && (
            <Marker
              coordinate={{
                latitude: location?.coords?.latitude,
                longitude: location?.coords?.longitude,
              }}
            />
          )}
        </MapView>
        <Button onPress={getGeolocation}>найти меня</Button>
      </View>
      <View style={styles.pushContainer}>
        <Text style={styles.title}>Работа с пушами</Text>
        <Button onPress={sendPush}>Отправить пуш</Button>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Версия приложения 1.0.0</Text>
        <Button onPress={() => onShare("Версия приложения 1.0.0")}>поделиться</Button>
      </View>
    </ScrollView>
  );
};

export default Profile;
