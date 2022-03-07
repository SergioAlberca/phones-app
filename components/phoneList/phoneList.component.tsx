import { Box } from "native-base";
import React from "react";
import { FlatList } from "react-native";
import { IPhoneList } from "../../interfaces/phones";
import ListItem from "../listItem/listItem.component";

interface Props {
  imageUrl: string;
  phones: IPhoneList[];
  goToDetail: Function;
}

const PhoneList: React.FC<Props> = (props: Props) => {
  const { imageUrl, phones, goToDetail } = props;

  return (
    <Box>
      <FlatList
        data={phones}
        renderItem={({ item }) => (
          <ListItem goToDetail={goToDetail} phone={item} imageUrl={imageUrl} />
        )}
        keyExtractor={(item) => item.name}
      />
    </Box>
  );
};

export default PhoneList;
