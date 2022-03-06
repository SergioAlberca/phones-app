import React from "react";
import {
  Center,
  Container,
  Heading,
  NativeBaseProvider,
  Text,
} from "native-base";

const DetailPage = () => {
  return (
    <NativeBaseProvider>
      <Center>
        <Container>
          <Heading>
            DetailPage
            <Text color="emerald.500"> Aquí el detalle de teléfonos</Text>
          </Heading>
        </Container>
      </Center>
    </NativeBaseProvider>
  );
};

export default DetailPage;
