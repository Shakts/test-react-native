import React from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';

class PasswordScreen extends React.Component {
  
  constructor() {
    super();
    this.state = {
      passWord: ''
    };

    // bind this to functions
    this.inputPassword = this.inputPassword.bind(this);
    this.submitPassword = this.submitPassword.bind(this);
  }

  inputPassword(textInput) {
    this.setState({passWord: textInput});
  }

  submitPassword() {
    if (!this.state.passWord) {
      Alert.alert('', 'Password must not be empty', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
    }
    else {
      this.props.navigation.navigate('Search');
    }
  }

  render() {
    return (
      <View style = {styles.emptyView}>
        <View style = {styles.emptyView}></View>
        <View style = {styles.loginForm}>
          <Text style={styles.formText}>Login</Text>
          <TextInput placeholder="Password" style={styles.usernameForm} onChangeText={text => this.inputPassword(text)} secureTextEntry={true}></TextInput>
          <Button title="submit" style={styles.submitButton} onPress={this.submitPassword}/>
        </View>
        <View style = {styles.emptyView}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emptyView: {
    flex:1
  },
  loginForm: {
    backgroundColor: '#b1e8f0',
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: 32,
    margin: 16,
    borderRadius: 16
  },
  formText : {
    alignSelf: 'center', 
    fontSize: 32,
  },
  usernameForm: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 24, 
    backgroundColor: '#dbdbdb'
  },
  submitButton: {
    marginLeft: 10,
    marginRight: 10
  }
});

export default PasswordScreen;