import React from "react";
import { Box, HStack, VStack, Text, Spacer, Icon } from "native-base";
import { Entypo } from "@native-base/icons";
import { IPhone } from "../../interfaces/phones";

interface Props {
  phone: IPhone;
  imageUrl: string;
  goToDetail: Function;
}

const ListItem = (props: Props) => {
  const { phone, goToDetail } = props;

  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: "gray.600",
      }}
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2"
    >
      <HStack space={3} justifyContent="space-between">
        {/* <Avatar
          size="48px"
          source={{
            uri: `${imageUrl}${phone.img}`,
          }}
        /> */}
        <VStack>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            bold
          >
            {phone.name}
          </Text>
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
          >
            {phone.manuFacturer}
          </Text>
        </VStack>
        <Spacer />
        <Text
          fontSize="xs"
          _dark={{
            color: "warmGray.50",
          }}
          color="coolGray.800"
          alignSelf="flex-start"
        >
          <Icon
            as={Entypo}
            name="eye"
            onPress={() => goToDetail(phone._id)}
          ></Icon>
        </Text>
      </HStack>
    </Box>
  );
};

export default ListItem;
