import { Box } from "native-base";
import React from "react";
import { FlatList } from "react-native";
import { IPhone } from "../../interfaces/phones";
import ListItem from "../listItem/listItem.component";

interface Props {
  imageUrl: string;
  phones: IPhone[];
  goToDetail: Function;
}

const PhoneList = (props: Props) => {
  const { imageUrl, phones, goToDetail } = props;

  return (
    <Box>
      <FlatList
        data={phones}
        renderItem={({ item }) => (
          <ListItem goToDetail={goToDetail} phone={item} imageUrl={imageUrl} />
        )}
        keyExtractor={(item) => item._id}
      />
    </Box>
  );
};

export default PhoneList;
