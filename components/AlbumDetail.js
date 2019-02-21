import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const {
    // eslint-disable-next-line camelcase
    thumbnail_image, title, artist, image
  } = album;
  const {
    thumbnailStyle, headerContent, thumbnailContainer, headerText, imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContent}>
          <Text style={headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18,
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
};

export default AlbumDetail;
