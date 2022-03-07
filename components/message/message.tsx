import React from "react";
import {
  Alert,
  CloseIcon,
  HStack,
  IconButton,
  VStack,
  Text,
} from "native-base";

interface Props {
  title: string;
  status: "error";
}

const Message: React.FC<Props> = (props: Props) => {
  const { title, status } = props;
  console.log(title);

  return (
    <Alert w="100%" status={status}>
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} justifyContent="space-between">
          <HStack space={2} flexShrink={1}>
            <Alert.Icon mt="1" />
            {title}
          </HStack>
          <IconButton
            variant="unstyled"
            icon={<CloseIcon size="3" color="coolGray.600" />}
          />
        </HStack>
      </VStack>
    </Alert>
  );
};

export default Message;
