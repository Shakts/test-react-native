import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator, Button, FlatList, Alert} from 'react-native';
import Commit from './Commit';

class CommitsScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      repoFound: false,
      currentPage: 1,
      commitData: [],
      isLoading: false
    }

    this.fetchData = this.fetchData.bind(this);
    this.logout = this.logout.bind(this);
  }

  fetchData() {
    this.setState({
      repoFound: this.state.repoFound,
      currentPage: this.state.currentPage,
      commitData: this.state.commitData,
      isLoading: true
    })

    fetch('https://api.github.com/repos/' + this.props.route.params.searchQuery + '/commits?page=' +
      this.state.currentPage + '&per_page=5')
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        let fetchedCommits = jsonResponse.map(currentCommit => ({
          id: currentCommit.node_id,
          avatarUrl: currentCommit.author.avatar_url,
          username: currentCommit.author.login,
          commitMessage: currentCommit.commit.message,
          commitDate: currentCommit.commit.author.date
        }));

        this.setState({
          repoFound:true,
          currentPage: this.state.currentPage + 1,
          commitData: this.state.commitData.concat(fetchedCommits),
          isLoading: false
        })
      })
      .catch(function(error) {
        throw error;
      });;
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => (<Button title="Logout" onPress={this.logout}/>)
    });

    this.fetchData();
  }

  logout() {
    Alert.alert('', 
      'Are you sure you want to log out?', 
      [{ 
        text: 'No', onPress: () => console.log("Cancel Pressed")
      }, {
        text: 'Yes', onPress: () => this.props.navigation.navigate('Login')
      }]);
  }

  renderFooter() {
    return (
      <View style={styles.loadingIndicator}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  render() {
    let displayedView;

    if (this.state.repoFound) {
      displayedView = (
        <View style={{alignItems: "center"}}>
          <Text style={{fontSize: 18, margin: 8}}>Commits on : {this.props.route.params.searchQuery}</Text>
          <FlatList
            data={this.state.commitData}
            renderItem={({item}) => <Commit commitItem={item}/>}
            keyExtractor={item => item.id}
            onEndReached={this.fetchData}
            onEndReachedThreshold={2}
            ListFooterComponent={this.renderFooter}
            />
        </View>
      );
    }
    else {
      displayedView = (
        <View style={{alignItems: "center"}}>
          <Text style={{fontSize: 18, margin: 8}}>Repo not found</Text>
        </View>
      );
    }

    return (
      <View>
        {displayedView}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingIndicator : {
    marginTop: 10,
    alignItems: "center"
  }
});

export default CommitsScreen;