import React from "react";
import { View, Text, Image } from "react-native";
import ImagePicker from "components/ui/image-picker";
import { styles } from "./styles";

const List = () => {
  const [selectedImage, setSelectedImage] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Версия приложения 1.0.0</Text>
      <ImagePicker setSelectedImage={setSelectedImage} />
      {selectedImage ? (
        <View>
          <Image
            source={{ uri: selectedImage.localUri }}
            style={{ width: 300, height: 300, borderRadius: 150 }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default List;
