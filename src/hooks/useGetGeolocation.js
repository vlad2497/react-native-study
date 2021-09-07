import { useState } from "react";
import * as Location from "expo-location";
import { useCallback } from "react";

export default () => {
  const [location, setLocation] = useState(null);

  const getGeolocation = useCallback(async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }, []);

  return { location, getGeolocation };
};
