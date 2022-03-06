import { Box, Heading } from "native-base";
import React from "react";
import { FlatList } from "react-native";
import { IPhone } from "../../interfaces/phones";
import ListItem from "../listItem/listItem.component";

interface Props {
  imageUrl: string;
  phones: IPhone[];
}

const PhoneList = (props: Props) => {
  const { imageUrl, phones } = props;

  return (
    <Box>
      <FlatList
        data={phones}
        renderItem={({ item }) => <ListItem phone={item} imageUrl={imageUrl} />}
        keyExtractor={(item) => item._id}
      />
    </Box>
  );
};

export default PhoneList;
