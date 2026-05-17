import React from "react";
import { Text } from "ink";
import InkSpinner from "ink-spinner";

interface SpinnerProps {
  label?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ label = "Processing..." }) => {
  return (
    <Text>
      <InkSpinner type="dots" /> {label}
    </Text>
  );
};
