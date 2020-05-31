import React from 'react';
import {Text, View, StyleSheet, TextInput, Button, FlatList} from 'react-native';
import Commit from './Commit';

class CommitsScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      repoFound:false,
      currentPage: 1,
      commitData:[],
      
    }

    this.fetchData = this.fetchData.bind(this);
    this.logout = this.logout.bind(this);
  }

  fetchData() {
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
          commitData: this.state.commitData.concat(fetchedCommits)
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
    this.props.navigation.navigate('Login');
  }

  render() {
    let displayedView;

    if (this.state.repoFound) {
      displayedView = (
        <View >
          <Text>Commits on : {this.props.route.params.searchQuery}</Text>
          <FlatList
            data={this.state.commitData}
            renderItem={({item}) => <Commit commitItem={item}/>}
            keyExtractor={item => item.id}
            onEndReached={this.fetchData}
            onEndReachedThreshold={0}
            />
        </View>
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

const styles = StyleSheet.create({
});

export default CommitsScreen;