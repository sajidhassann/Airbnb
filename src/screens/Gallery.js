/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import PhotoBrowser from 'react-native-photo-browser';

const Gallery = () => {
  const [state, setState] = useState({selected: new Set()});

  useEffect(() => {
    const requestExternalStoreageRead = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Airbnb',
            message: 'App needs access to external storage',
          },
        );
        try {
          const data = await CameraRoll.getPhotos({
            first: 100,
            assetType: 'Photos',
          });

          const media = [];
          data.edges.forEach((d) =>
            media.push({
              photo: d.node.image.uri,
            }),
          );
          setState({...state, media});
        } catch (error) {
          console.error(error);
        }
        console.log(granted);
        return granted == PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        return false;
      }
    };

    requestExternalStoreageRead();
  }, []);

  const onSelectionChanged = (media, index, selected) => {
    const copy = new Set(state.selected);
    if (selected) {
      copy.add(index);
    } else {
      copy.delete(index);
    }
    setState({...state, selected: copy});
  };
  return (
    <PhotoBrowser
      mediaList={state.media}
      style={{backgroundColor: 'white'}}
      displayNavArrows={true}
      displaySelectionButtons={true}
      startOnGrid={true}
      onSelectionChanged={onSelectionChanged}
      customTitle={(index, rowCount) => `${index} sur ${rowCount}`}
    />
  );
};

export default Gallery;
