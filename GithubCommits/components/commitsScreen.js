import React from 'react';
import {Text, View, StyleSheet, TextInput, Button, FlatList} from 'react-native';
import Commit from './Commit';

let dummyData = [{
    key: 'a',
    avatarUrl: 'https://picsum.photos/100',
    username: 'User A',
    commitMessage: 'Message A \nMessageA detail 1\n Message A detail 2',
    commitDate: '2020-02-20'
  },
  {
    key: 'b',
    avatarUrl: 'https://picsum.photos/100',
    username: 'User B',
    commitMessage: 'Message B \nMessageB detail 1',
    commitDate: '2020-02-20'
  },
  {
    key: 'c',
    avatarUrl: 'https://picsum.photos/100',
    username: 'User C',
    commitMessage: 'Message C \nMessageC detail 1\nMessageC detail 2\nMessageC detail 3\nMessageC detail 4',
    commitDate: '2020-02-20'
  },
  {
    key: 'd',
    avatarUrl: 'https://picsum.photos/100',
    username: 'User D',
    commitMessage: 'Message D',
    commitDate: '2020-02-20'
  },
  {
    key: 'e',
    avatarUrl: 'https://picsum.photos/100',
    username: 'User E',
    commitMessage: 'Message E \ndjfhahfiafiubafbadjkbajdhfbjbjabjhbfbbkabfluihefohqohfuiabbfiabdvubyfybaiubvkabiugaifhiaubfbf',
    commitDate: '2020-02-20'
  },
]

class CommitsScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      repoFound:false,
      currentPage: 1,
      commitData:[]
    }

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch('https://api.github.com/repos/' + this.props.route.params.searchQuery + '/commits?page=' +
      this.state.currentPage + '&per_page=5')
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        console.log(jsonResponse[0]);
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
    this.fetchData();
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