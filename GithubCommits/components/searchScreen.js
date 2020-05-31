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
  }

  componentDidMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonPressAndroid
    );
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

  inputRepoName(e) {
    this.setState({repoName: e.target.value});
  }

  findRepo() {
    this.props.navigation.navigate('Commits', {searchQuery: this.state.repoName});
  }

  render() {
    return (
      <View style={stylesheet.page}>
        <Text style={stylesheet.pageTitle}>Enter a repository name</Text>
        <TextInput defaultValue={this.state.repoName} onChange={this.inputRepoName}></TextInput>
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