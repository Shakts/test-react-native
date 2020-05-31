import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

class Commit extends React.Component {
  render() {
    return(
      <View style={styles.commitItem}>
        <View style={styles.topView}>
          <Image style={styles.avatarImage} source={{uri: this.props.commitItem.avatarUrl}}/>
          <View style={{marginLeft:16}}>
            <Text style={{fontSize: 24, color: '#ffffff'}}>{this.props.commitItem.username}</Text>
            <Text style={{color: '#ffffff'}}>{this.props.commitItem.commitDate}</Text>
          </View>
        </View>
        <View style={{padding: 16}}>
          <Text style={{fontSize: 20, textDecorationLine: "underline"}}>Commit message :</Text>
          <Text style={{marginTop: 12}}>{this.props.commitItem.commitMessage}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  commitItem: {
    margin: 8,
    backgroundColor: '#eeeeee',
    borderColor: '#000000',
    borderWidth: 3,
    borderRadius: 10
  },
  avatarImage: {
    width: 100,
    height: 100
  },
  topView : {
    flexDirection: "row",
    backgroundColor: '#2296f3',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5, 
    padding: 8
  }
});

export default Commit;