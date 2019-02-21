/* eslint-disable no-console */
import React from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
  state = { albums: [] };

    componentWillMount = async () => {
      try {
        const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
        const resJson = await res.json();
        this.setState({ albums: resJson });
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
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      );
    }
}

export default AlbumList;
