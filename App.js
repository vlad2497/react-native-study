import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { loadFonts } from "fonts";
import { AppWithNavigation } from "navigation";

export default () => {
  const [loading, setLoading] = useState(true);

  if (loading)
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setLoading(false)}
        onError={(err) => console.log(err)}
      />
    );

  return <AppWithNavigation />;
};
