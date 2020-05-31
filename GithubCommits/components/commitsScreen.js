import React from 'react';
import {Text, View, StyleSheet, TextInput, Button, FlatList} from 'react-native';

class CommitsScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      repoFound:true
    }
  }

  render() {
    let displayedView;

    if (this.state.repoFound) {
      displayedView = (
        <>
          <Text>Commits for ...</Text>
          <FlatList>

          </FlatList>
        </>
      );
    }
    else {
      displayedView = (
        <>
          <Text>Repo not found</Text>
        </>
      );
    }

    return (
      <View>
        {displayedView}
      </View>
    );
  }
}

export default CommitsScreen;