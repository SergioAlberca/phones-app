import React from "react";
import { Text } from "native-base";

interface Props {
  title: string;
  value: string;
}

const DetailItem = (props: Props) => {
  const { title, value } = props;

  return (
    <Text>
      {title} : {value}
    </Text>
  );
};

export default DetailItem;
