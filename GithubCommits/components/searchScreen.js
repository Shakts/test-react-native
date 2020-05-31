import React from 'react';
import {Text, View, StyleSheet, TextInput, Button, BackHandler} from 'react-native';

class SearchScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      repoName: 'facebook/react-native'
    };

    // bind functions
    this.inputRepoName = this.inputRepoName.bind(this);
    this.findRepo = this.findRepo.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonPressAndroid
    );

    this.props.navigation.setOptions({
      headerRight: () => (<Button title="Logout" onPress={this.logout}/>)
    });
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonPressAndroid
    );
  }

  handleBackButtonPressAndroid() {
    return true;
  }

  inputRepoName(textInput) {
    this.setState({repoName: textInput});
  }

  findRepo() {
    this.props.navigation.navigate('Commits', {searchQuery: this.state.repoName});
  }

  logout() {
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={stylesheet.page}>
        <Text style={stylesheet.pageTitle}>Enter a repository name</Text>
        <TextInput defaultValue={this.state.repoName} onChangeText={text => this.inputRepoName(text)} style={{fontSize: 18}}></TextInput>
        <Button title="Find" onPress={this.findRepo}></Button>
      </View>
    );
  }
}

const stylesheet = StyleSheet.create({
  page : {
    padding: 16
  },
  pageTitle : {
    alignSelf: "center",
    marginBottom: 24,
    fontSize:24
  }
});

export default SearchScreen;