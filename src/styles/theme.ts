import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const themeConfig = {
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353656",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    teal: {
      "900": "#1D4044",
      "800": "#234E52",
      "700": "#285E61",
      "600": "#2C7A7B",
      "500": "#319795",
      "400": "#38B2AC",
      "300": "#4FD1C5",
      "200": "#81E6D9",
      "100": "#B2F5EA",
      "50": "#E6FFFA",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    },
  },
};

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

export const theme = extendTheme({ themeConfig, config });
