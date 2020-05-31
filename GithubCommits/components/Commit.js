import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

class Commit extends React.Component {
  render() {
    return(
      <View style={styles.commitItem}>
        <View style={{flexDirection: "row"}}>
          <Image style={styles.avatarImage} source={{uri: this.props.commitItem.avatarUrl}}/>
          <View style={{marginLeft:16, justifyContent: "center"}}>
            <Text style={{fontSize: 24}}>{this.props.commitItem.username}</Text>
            <Text>{this.props.commitItem.commitDate}</Text>
          </View>
        </View>
        <View style={{marginTop: 16}}>
          <Text style={{fontSize: 20, textDecorationLine: "underline"}}>Commit message :</Text>
          <Text style={{marginTop: 8}}>{this.props.commitItem.commitMessage}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commitItem: {
    padding: 16,
    margin: 8,
    backgroundColor: '#ff9999',
    borderRadius: 10
  },
  avatarImage: {
    width: 100,
    height: 100
  },
});

export default Commit;