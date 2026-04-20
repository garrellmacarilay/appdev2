import * as React from 'react';
import { View, Text } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from '@react-navigation/elements';

import type {
  RootStackParamList,
  HomeScreenNavigationProp,
  DetailsProps,
  DetailsScreenNavigationProp,
} from './types';

function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <Text>Home Screen</Text>
      <Button
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      >
        Go to Details
      </Button>
    </View>
  );
}

function DetailsScreen({ route }: DetailsProps) {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam ?? 'none'}</Text>
      <Button onPress={() => navigation.goBack()}>Go back</Button>
    </View>
  );
}

const RootStack = createNativeStackNavigator<RootStackParamList>({
  screens: {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
