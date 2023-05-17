import {
  extendTheme,
  withDefaultColorScheme,
  type ThemeConfig,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    config,
    colors: {
      primary: {
        // 50: "#e9ecff",
        // 100: "#c1c6f0",
        // 200: "#999fe5",
        // 300: "#7179da",
        // 400: "#4954cf",
        // 500: "#313ab6",
        // 600: "#252d8d",
        // 700: "#1a2065",
        // 800: "#0f133e",
        // 900: "#040619",
      },
      gray: {
        // 50: "#f2f2f2",
        // 100: "#d9d9d9",
        // 200: "#bfbfbf",
        // 300: "#a6a6a6",
        // 400: "#8c8c8c",
        // 500: "#737373",
        // 600: "#595959",
        // 700: "#404040",
        // 800: "#262626",
        // 900: "#0d0d0d",
        //
        // 50: "#f9f9f9",
        // 100: "#ededed",
        // 200: "#d3d3d3",
        // 300: "#b3b3b3",
        // 400: "#a0a0a0",
        // 500: "#898989",
        // 600: "#6c6c6c",
        // 700: "#202020",
        // 800: "#121212",
        // 900: "#111",
        //
        // 50: "#f9f9f9",
        // 100: "#ededed",
        // 200: "#d3d3d3",
        // 300: "#b3b3b3",
        // 400: "#a0a0a0",
        // 500: "#898989",
        // 600: "#4C5D80",
        // 700: "#394660",
        // 800: "#262F40",
        // 900: "#131720",
      },
    },
  }
  // withDefaultColorScheme({ colorScheme: "primary" })
);

export default theme;
