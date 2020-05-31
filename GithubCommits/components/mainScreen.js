import React from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class MainScreen extends React.Component {
  
  constructor() {
    super();
    this.state = {
      userName: ''
    };
    this.submitUsername = this.submitUsername.bind(this);
    this.inputUsername = this.inputUsername.bind(this);
  }

  inputUsername(TextInput) {
    this.setState({userName: TextInput});
  }

  submitUsername() {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(this.state.userName) === false) {
      Alert.alert('', 'Email is invalid', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
    }
    else {
      this.props.navigation.navigate('Password');
    }
  }

  render() {
    return (
      <View style = {styles.emptyView}>
        <View style = {styles.emptyView}></View>
        <View style = {styles.loginForm}>
          <View style = {styles.topView}>
            <Text style={styles.formText}>Email Address</Text>
          </View>
          <View style = {styles.bottomView}>
            <TextInput placeholder="e.g: person@mail.com" style={styles.usernameForm} onChangeText={text => this.inputUsername(text)}></TextInput>
            <Button title="submit" style={styles.submitButton} onPress={this.submitUsername}/>
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

export default MainScreen;