import React, { useState, useEffect } from 'react';
import { Text } from 'ink';

const SPINNER_FRAMES = ['|', '/', '-', '\\'];

const Spinner: React.FC<{ label?: string }> = ({ label = 'Loading' }) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % SPINNER_FRAMES.length);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <Text>
      {label} {SPINNER_FRAMES[frame]}
    </Text>
  );
};

export default Spinner;
