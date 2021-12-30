import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import Headerbar from './src/components/Headerbar';
import Category from './src/components/Category';
import {
  imageItemsOne,
  imageItemsThree,
  imageItemsTwo,
} from './src/deta/ImageData';

const App = () => {
  return (
    <View>
      <StatusBar backgroundColor="#4169E1" barStyle="light-content" />
      <View>
        <Headerbar />
        <View
          style={{
            backgroundColor: '#4169E1',
          }}>
          <View
            style={{
              margin: 8,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 6,
            }}>
            <FontAwesome5
              name={'search'}
              solid
              size={20}
              style={{
                marginHorizontal: 12,
              }}
            />
            <TextInput
              style={{
                flex: 1,
                fontWeight: '700',
                fontSize: 15,
              }}
              placeholder="Search for Product, Brand and More"></TextInput>
          </View>
        </View>
      </View>

      <FlatList
        data={imageItemsOne}
        horizontal
        style={{height: 100, marginVertical: 20}}
        keyExtractor={item => item.text}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <Category image={item.image} title={item.text} />;
        }}
      />
      {/* </View> */}

      <View
        style={{
          backgroundColor: '#DCDCDC',
          paddingVertical: 18,
        }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 12,
            }}>
            {imageItemsTwo.map(function (i) {
              return (
                <Image
                  source={i}
                  style={{
                    width: 150,
                    height: 115,
                    borderRadius: 3.5,
                    overflow: 'hidden',
                    marginLeft: 12,
                  }}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          paddingVertical: 12,
        }}>
        <Text
          style={{
            marginBottom: 15,
            fontSize: 18,
            marginLeft: 12,
            color: 'black',
            fontWeight: '700',
          }}>
          Weekly finds for you
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 12,
            }}>
            {imageItemsThree.map(function (i) {
              return (
                <View
                  style={{
                    width: 215,
                    borderColor: 'lightgrey',
                    borderWidth: 1,
                    marginLeft: 12,
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={i.image}
                    style={{
                      width: '100%',
                      height: 180,
                      marginRight: 15,
                    }}
                  />
                  <Text
                    style={{
                      marginTop: 8,
                      marginLeft: 8,
                      fontWeight: '600',
                    }}>
                    HOT DEALS
                  </Text>
                  <Text
                    style={{
                      marginTop: 8,
                      marginLeft: 8,
                      fontWeight: '900',
                      color: 'black',
                    }}>
                    {i.text}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 8,
                      marginLeft: 8,
                      alignItems: 'center',
                      marginBottom: 8,
                    }}>
                    <FontAwesome5 name={'arrow-left'} color={'red'} size={10} />
                    <Text
                      style={{
                        fontWeight: '600',
                        color: 'red',
                      }}>
                      EXPLORE & SHOP
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
