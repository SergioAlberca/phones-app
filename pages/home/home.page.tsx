import React from "react";
import { Center, Container, Heading, NativeBaseProvider } from "native-base";
import PhoneList from "../../components/phoneList/phoneList.component";
import useHome from "../../hooks/home";
import { CONSTANTS } from "../../utils/constants";
import Loading from "../../components/loading/loading.component";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type DetailPageParamList = {
  Details: { id: string };
};
type DetailPageProp = StackNavigationProp<DetailPageParamList, "Details">;

const HomePage = () => {
  const { data, isLoading } = useHome();
  const navigation = useNavigation<DetailPageProp>();
  const imageUrl = CONSTANTS.IMAGE_URL;

  const goToDetail = (id: string) => {
    navigation.navigate("Details", { id });
  };

  return (
    <NativeBaseProvider>
      <Center>
        <Container>
          <Heading>Home</Heading>
        </Container>
      </Center>
      {!isLoading && data.length > 0 ? (
        <PhoneList phones={data} imageUrl={imageUrl} goToDetail={goToDetail} />
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  );
};

export default HomePage;
