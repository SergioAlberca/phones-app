import { Box, Button, Center, Image } from "native-base";
import React from "react";
import { IPhone } from "../../interfaces/phones";
import DetailItem from "../detailItem/detailItem.component";

interface Props {
  phone: IPhone;
  imageUrl: string;
  onDeletePhone: Function;
}

const DetailItemContainer: React.FC<Props> = (props: Props) => {
  const { phone, imageUrl, onDeletePhone } = props;

  return (
    <Box>
      <Center>
        {Object.entries(phone).map(([key, value], i: number) => {
          return key === "img" ? (
            <Image
              source={{
                uri: `${imageUrl}${phone.img}`,
              }}
            />
          ) : (
            <DetailItem title={key} value={value} key={i} />
          );
        })}
        <Center flexDirection={"row"}>
          <Button color={"red.500"} onPress={() => onDeletePhone(phone._id)}>
            Delete
          </Button>
        </Center>
      </Center>
    </Box>
  );
};

export default DetailItemContainer;
