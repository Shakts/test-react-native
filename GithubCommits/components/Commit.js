import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

class Commit extends React.Component {
  render() {
    return(
      <View style={styles.commitItem}>
        <Image style={styles.avatarImage} source={{uri: this.props.commitItem.avatarUrl}}/>
        <Text>{this.props.commitItem.username}</Text>
        <Text>{this.props.commitItem.commitMessage}</Text>
        <Text>{this.props.commitItem.commitDate}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commitItem: {
    padding: 16,
    margin: 16,
    backgroundColor: '#ff9999',
    borderRadius: 10
  },
  avatarImage: {
    width: 100,
    height: 100
  }
});

export default Commit;