import { Center, HStack, Spinner } from "native-base";
import React from "react";

const Loading: React.FC<{}> = () => {
  return (
    <Center>
      <HStack space={8} justifyContent="center" alignItems="center">
        <Spinner size="lg" />
      </HStack>
    </Center>
  );
};

export default Loading;
