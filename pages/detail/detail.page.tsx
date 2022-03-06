import React from "react";
import { Box, Center, Container, NativeBaseProvider } from "native-base";
import useDetail from "../../hooks/detail";
import Loading from "../../components/loading/loading.component";
import DetailItemContainer from "../../components/detailItemsContainer/detailItemsContainer.component";
import { useNavigation } from "@react-navigation/native";
import { HomePageProp } from "../../interfaces/routes";
import { CONSTANTS } from "../../utils/constants";

const DetailPage = (props: any) => {
  const navigation = useNavigation<HomePageProp>();
  const imageUrl = CONSTANTS.IMAGE_URL;

  const goToHome = (id: string) => {
    navigation.navigate("Home");
  };

  const { data, isLoading, onDeletePhone } = useDetail(
    props.route.params.id,
    goToHome
  );

  return (
    <NativeBaseProvider>
      <Center>
        <Container>
          <Box>
            {!isLoading && data ? (
              <DetailItemContainer
                phone={data}
                imageUrl={imageUrl}
                onDeletePhone={onDeletePhone}
              />
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
