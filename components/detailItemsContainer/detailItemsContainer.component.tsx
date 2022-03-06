import { Box, Center } from "native-base";
import React from "react";
import { IPhone } from "../../interfaces/phones";
import DetailItem from "../detailItem/detailItem.component";

interface Props {
  phone: IPhone;
}

const DetailItemContainer = (props: Props) => {
  const { phone } = props;

  const collection = Object.keys(phone);
  return (
    <Box>
      <Center>
        {collection.map((item: string, i: number) => {
          return <DetailItem title={item} value={phone[item]} key={i} />;
        })}
      </Center>
    </Box>
  );
};

export default DetailItemContainer;
