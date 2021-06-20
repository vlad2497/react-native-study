import homeImage from "../../assets/icons/tabs/home.png";
import homeImageActive from "../../assets/icons/tabs/home-active.png";
import favoritesImage from "../../assets/icons/tabs/star.png";
import favoritesImageActive from "../../assets/icons/tabs/star-active.png";
import infoImage from "../../assets/icons/tabs/info.png";
import infoImageActive from "../../assets/icons/tabs/info-active.png";

export const getTabImage = (routeName, focused) => {
  if (routeName === "Favorites") {
    if (focused) return homeImageActive;
    else return homeImage;
  } else if (routeName === "Populars") {
    if (focused) return favoritesImageActive;
    else return favoritesImage;
  } else if (routeName === "About") {
    if (focused) return infoImageActive;
    else return infoImage;
  } else return "";
};
