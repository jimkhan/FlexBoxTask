import React from 'react';
import {View, Text, Image} from 'react-native';

interface Props {
  image: string;
  title: string;
}
const Category = ({image, title}: Props) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <Image
        source={image}
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          overflow: 'hidden',
        }}
      />
      <Text
        style={{
          marginTop: 10,
          fontWeight: '900',
          color: 'black',
        }}>
        {title}
      </Text>
    </View>
  );
};

export default Category;
