import React from "react";
import { Center, Container, Heading, NativeBaseProvider } from "native-base";
import PhoneList from "../../components/phoneList/phoneList.component";
import useHome from "../../hooks/home";
import { CONSTANTS } from "../../utils/constants";
import Loading from "../../components/loading/loading.component";
import { useNavigation } from "@react-navigation/native";
import { DetailPageProp, RootStackParamList } from "../../interfaces/routes";
import Message from "../../components/message/message";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const HomePage: React.FC<any> = ({ navigation, route }: Props) => {
  const { data, isLoading, error, hasError } = useHome(navigation, route);
  const Navigation = useNavigation<DetailPageProp>();
  const imageUrl = CONSTANTS.IMAGE_URL;

  const goToDetail = (id: string) => {
    Navigation.navigate("Details", { id });
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
      {hasError && <Message status="error" title={error} />}
    </NativeBaseProvider>
  );
};

export default HomePage;
