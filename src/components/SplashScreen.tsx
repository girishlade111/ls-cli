import React, { useEffect, useState } from 'react';
import { Box, Text } from 'ink';

interface Props {
  onComplete: () => void;
}

const SplashScreen: React.FC<Props> = ({ onComplete }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((d) => (d.length >= 3 ? '' : d + '.'));
    }, 300);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height={10}
    >
      <Text bold color="cyan">
        LS CLI
      </Text>
      <Text>Loading{dots}</Text>
    </Box>
  );
};

export default SplashScreen;
