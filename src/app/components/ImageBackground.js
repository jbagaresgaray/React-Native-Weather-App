import React from 'react';
import {View, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';

const ImageBackground = (props) => {
  const {children, style = {}, imageStyle, imageRef} = props;

  return (
    <View style={style} ref={this._captureRef}>
      <FastImage
        {...props}
        style={[
          StyleSheet.absoluteFill,
          {
            width: style.width,
            height: style.height,
          },
          imageStyle,
        ]}
      />
      {children}
    </View>
  );
};

export default ImageBackground;
