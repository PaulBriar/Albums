import React from 'react';
import { View, Text } from 'react-native';

class AlbumList extends React.Component {
  state = { albums: [] };

    componentWillMount = () => {
      try {
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
          .then(response => response.json())
          .then(responseJson => this.setState({ albums: responseJson }));
      } catch (err) {
        console.log(err);
      }
    }

    render() {
      console.log(this.state);
      return (
        <View>
          <Text>Album List</Text>
        </View>
      );
    }
}

export default AlbumList;
