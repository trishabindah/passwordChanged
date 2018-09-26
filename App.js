import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.redScreen}>
          <Image
            source={require('./assets/logo.png')}
            style={{ width: 200, height: 200, }}
          />
          <View style={styles.whiteScreen}>
            <View style={styles.messageForm}>
              <Text
                style={styles.message}
              >You have successfully changed your password
              </Text>
              <TouchableHighlight
                style={styles.continue}>
                <Text
                  style={styles.continueText}
                >Continue</Text>
              </TouchableHighlight>
            </View>

          </View>

        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#FFF'
  },
  redScreen: {
    flex: 1,
    backgroundColor: '#D43939',
    alignItems: 'center'
  },
  whiteScreen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  messageForm: {
    flex: 2,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  message: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#D43939',
    marginBottom: 30,
    justifyContent: "center",
  },
  continue: {
    height: 36,
    backgroundColor: '#D43939',
    borderColor: '#D43939',
    borderWidth: 1,
    width: "90%",
    marginTop: 25,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  continueText: {
    height: 36,
    lineHeight: 36,
    color: '#FFF'
  },
});
