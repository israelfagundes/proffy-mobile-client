import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import {
  Archivo_400Regular as ArchivoRegular,
  Archivo_700Bold as ArchivoBold,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular as PoppinsRegular,
  Poppins_600SemiBold as PoppinsSemiBold,
} from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    ArchivoRegular,
    ArchivoBold,
    PoppinsRegular,
    PoppinsSemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar style="light" />
      <AppStack />
    </>
  );
};

export default App;
