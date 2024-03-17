import { Platform, Dimensions } from "react-native";

export const getDimension = () => {
  const { width, height } = Dimensions.get("window");

  return {
    width,
    height,
  };
};

class GlobaHelpers {
  getPlatform = () => {
    const platform = Platform.select({
      ios: "ios",
      android: "android",
      web: "web",
    });

    return platform;
  };
}

export default GlobaHelpers;
