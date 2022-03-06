import { StackNavigationProp } from "@react-navigation/stack";

type DetailPageParamList = {
  Details: { id: string };
};
export type DetailPageProp = StackNavigationProp<
  DetailPageParamList,
  "Details"
>;

type HomePageParamList = {
  Home: undefined;
};
export type HomePageProp = StackNavigationProp<HomePageParamList, "Home">;
