/* eslint-disable no-console */
import React from 'react';
import { View } from 'react-native';
import AlbumDetail from './AlbumDetail';

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

    renderAlbums = () => {
      const { albums } = this.state;

      return albums.map(album => <AlbumDetail key={album.title} album={album} />);
    }

    render() {
      return (
        <View>
          {this.renderAlbums()}
        </View>
      );
    }
}

export default AlbumList;
