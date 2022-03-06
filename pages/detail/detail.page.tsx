import React from "react";
import {
  Box,
  Center,
  Container,
  NativeBaseProvider,
  Text,
  Image,
  Button,
} from "native-base";
import useDetail from "../../hooks/detail";
import Loading from "../../components/loading/loading.component";
import DetailItemContainer from "../../components/detailItemsContainer/detailItemsContainer.component";

const DetailPage = (props: any) => {
  const { data, isLoading } = useDetail(props.route.params.id);

  return (
    <NativeBaseProvider>
      <Center>
        <Container>
          <Box>
            {!isLoading && data ? (
              <DetailItemContainer phone={data} />
            ) : (
              <Loading />
            )}
          </Box>
        </Container>
      </Center>
    </NativeBaseProvider>
  );
};

export default DetailPage;
