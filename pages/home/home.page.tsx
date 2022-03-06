import React from "react";
import { Center, Container, Heading, NativeBaseProvider } from "native-base";
import PhoneList from "../../components/phoneList/phoneList.component";
import useHome from "../../hooks/home";
import { CONSTANTS } from "../../utils/constants";
import Loading from "../../components/loading/loading.component";

// type DetailPageParamList = {
//   Details: undefined;
// };
// type DetailPageProp = StackNavigationProp<DetailPageParamList, "Details">;

const HomePage = () => {
  const { data, isLoading } = useHome();
  const imageUrl = CONSTANTS.IMAGE_URL;
  // const navigation = useNavigation<DetailPageProp>();
  return (
    <NativeBaseProvider>
      <Center>
        <Container>
          <Heading>Home</Heading>
        </Container>
      </Center>
      {!isLoading && data.length > 0 ? (
        <PhoneList phones={data} imageUrl={imageUrl} />
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  );
};

export default HomePage;
