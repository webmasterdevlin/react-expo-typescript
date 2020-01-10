import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './app/navigation/root-navigation';

import { Provider as PaperProvider } from 'react-native-paper';

const App: React.FC<any> = () => {
  return (
    <PaperProvider>
      <RootNavigation />
    </PaperProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
