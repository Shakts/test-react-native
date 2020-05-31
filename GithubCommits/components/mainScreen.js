import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
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
    //ToDo : Perfom input validation, then load password form page
    this.props.navigation.navigate('Password');
  }

  render() {
    return (
      <View style = {styles.emptyView}>
        <View style = {styles.emptyView}></View>
        <View style = {styles.loginForm}>
          <Text style={styles.formText}>Login</Text>
          <TextInput placeholder="Username" style={styles.usernameForm} onChangeText={text => this.inputUsername(text)}></TextInput>
          <Button title="submit" style={styles.submitButton} onPress={this.submitUsername}/>
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

export default MainScreen;