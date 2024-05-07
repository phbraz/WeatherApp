import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TamaguiProvider, createTamagui } from '@tamagui/core'
import { config } from "@tamagui/config/v3";
import { TestPage } from "./src/views/TestPage";

const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig;
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
};

export default function App() {
  return (
      <TamaguiProvider config={tamaguiConfig}>
        <View style={styles.container}>
          <TestPage />
          <StatusBar style="auto" />
        </View>
      </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
