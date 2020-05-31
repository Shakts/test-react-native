import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

class Commit extends React.Component {
  render() {
    return(
      <View style={styles.commitItem}>
        <Image source={{uri: + this.props.commitItem.avatarUrl}}/>
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
  },  
});

export default Commit;