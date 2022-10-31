/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              TabOneScreen: "one",
            },
          },
          Discover: {
            screens: {
              TabTwoScreen: "two",
            },
          },
          Market: {
            screens: {
              TabTwoScreen: "3",
            },
          },
          Wallet: {
            screens: {
              TabTwoScreen: "4",
            },
          },
          Account: {
            screens: {
              TabTwoScreen: "5",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};

export default linking;
