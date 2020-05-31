import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

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

  inputRepoName(e) {
    this.setState({repoName: e.target.value});
  }

  findRepo() {
    // ToDo : Pass repo name to commitsScreen
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