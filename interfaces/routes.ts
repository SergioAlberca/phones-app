import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: { reload: boolean };
  Details: { id: string };
};

type DetailPageParamList = {
  Details: { id: string };
};
export type DetailPageProp = StackNavigationProp<
  DetailPageParamList,
  "Details"
>;

type HomePageParamList = {
  Home: { reload: boolean };
};
export type HomePageProp = StackNavigationProp<HomePageParamList, "Home">;
