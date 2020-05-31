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
          <View style = {styles.topView}>
            <Text style={styles.formText}>Password</Text>
          </View>
          <View style = {styles.bottomView}>
            <TextInput placeholder="enter you password" style={styles.usernameForm} onChangeText={text => this.inputPassword(text)} secureTextEntry={true}></TextInput>
            <Button title="submit" style={styles.submitButton} onPress={this.submitPassword}/>
          </View>
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
    borderWidth: 2,
    borderColor: '#000000',
    flex: 3,
    flexDirection: 'column',
    alignItems: 'stretch',
    margin: 16,
    borderRadius: 16
  },
  topView : {
    backgroundColor: '#2296f3',
    justifyContent: "center",
    flex:1
  },
  bottomView : {
    flex: 2,
    padding: 16, 
    justifyContent: "space-around"
    
  },
  formText : {
    alignSelf: 'center', 
    fontSize: 32,
    color: '#ffffff'
  },
  usernameForm: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 24
  },
  submitButton: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14
  }
});

export default PasswordScreen;