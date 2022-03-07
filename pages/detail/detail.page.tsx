import React from "react";
import { Box, Center, Container, NativeBaseProvider } from "native-base";
import useDetail from "../../hooks/detail";
import Loading from "../../components/loading/loading.component";
import DetailItemContainer from "../../components/detailItemsContainer/detailItemsContainer.component";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HomePageProp, RootStackParamList } from "../../interfaces/routes";
import { CONSTANTS } from "../../utils/constants";
import Message from "../../components/message/message";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

const DetailPage: React.FC<Props> = ({ route }: Props) => {
  const navigation = useNavigation<HomePageProp>();
  const imageUrl = CONSTANTS.IMAGE_URL;

  const goToHome = (id: string) => {
    navigation.navigate("Home", { reload: true });
  };

  const { data, isLoading, onDeletePhone, hasError, error } = useDetail(
    route.params.id,
    goToHome
  );

  return (
    <NativeBaseProvider>
      <Center>
        <Container>
          <Box>
            {isLoading && <Loading />}
            {!isLoading && data && (
              <DetailItemContainer
                phone={data}
                imageUrl={imageUrl}
                onDeletePhone={onDeletePhone}
              />
            )}
            {hasError && <Message status={"error"} title={error} />}
          </Box>
        </Container>
      </Center>
    </NativeBaseProvider>
  );
};

export default DetailPage;
