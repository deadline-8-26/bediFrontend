import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google'
WebBrowser.maybeCompleteAuthSession();
export default function App() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '519862697759-0h46qb5b7fsfjpicatit9ihat607rq11.apps.googleusercontent.com',
    responseType: idToken
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log(authentication)
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
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
