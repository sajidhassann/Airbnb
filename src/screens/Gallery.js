/* eslint-disable prettier/prettier */
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import PhotoBrowser from 'react-native-photo-browser';

const Gallery = ({navigation: {navigate}}) => {
  const [state, setState] = useState({
    selected: new Set(),
    media: [
      {id: 10, photo: 'http://placeimg.com/640/480/any'},
      {id: 11, photo: 'http://placeimg.com/640/480/any'},
      {id: 12, photo: 'http://placeimg.com/640/480/any'},
      {id: 13, photo: 'http://placeimg.com/640/480/any'},
      {id: 14, photo: 'http://placeimg.com/640/480/any'},
      {id: 15, photo: 'http://placeimg.com/640/480/any'},
      {id: 16, photo: 'http://placeimg.com/640/480/any'},
      {id: 17, photo: 'http://placeimg.com/640/480/any'},
      {id: 18, photo: 'http://placeimg.com/640/480/any'},
      {id: 19, photo: 'http://placeimg.com/640/480/any'},
    ],
  });
  const getImages = async () => {
    try {
      const res = await Axios.get(
        'https://picsum.photos/v2/list?limit=11&page=3',
      );
      setState({
        ...state,
        media: res?.data?.map((img) => ({
          id: Number(img.id),
          photo: img.download_url,
        })),
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getImages();
    return () => {};
  }, []);

  return (
    <PhotoBrowser
      mediaList={state.media}
      startOnGrid={true}
      displayTopBar={false}
      alwaysDisplayStatusBar={false}
      customTitle={(index, rowCount) => `${index} sur ${rowCount}`}
    />
  );
};

export default Gallery;
