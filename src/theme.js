import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light", // Always start in light mode
    useSystemColorMode: false, // Disable system preference for dark mode
  };
  
const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7caca",
      500: "#c53030",
    },
  },
});

export default theme;
