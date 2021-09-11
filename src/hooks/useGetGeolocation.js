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

    let location;
    let locationSuccess = false;
    while (!locationSuccess) {
      try {
        location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });
        locationSuccess = true;
      } catch (ex) {
        console.log("Location failed - Retrying...");
      }
    }
    setLocation(location);
  }, []);

  return { location, getGeolocation };
};
