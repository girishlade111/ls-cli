import React, { useState } from 'react';
import { Box, Text } from 'ink';
import SplashScreen from './components/SplashScreen.js';
import CommandDropdown from './components/CommandDropdown.js';
import Footer from './components/Footer.js';

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <Box flexDirection="column" padding={1}>
      <Text bold>LS CLI</Text>
      <CommandDropdown />
      <Footer />
    </Box>
  );
};

export default App;