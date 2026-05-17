import React from "react";
import { Box } from "ink";
import { SplashScreen } from "./components/SplashScreen";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <Box flexDirection="column">
      <SplashScreen />
      <Footer />
    </Box>
  );
};
