import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

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

  inputPassword(e) {
    this.setState({passWord: e.target.value});
  }

  submitPassword() {
    //ToDo : perform input validation, then load search page
    this.props.navigation.navigate('Search');
  }

  render() {
    return (
      <View style = {styles.emptyView}>
        <View style = {styles.emptyView}></View>
        <View style = {styles.loginForm}>
          <Text style={styles.formText}>Login</Text>
          <TextInput placeholder="Password" style={styles.usernameForm} onChange={this.inputPassword} secureTextEntry={true}></TextInput>
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