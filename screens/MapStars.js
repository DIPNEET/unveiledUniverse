import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackgrounda,
  ImageBackground,
  Image,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default class MapStars extends Component {
  constructor() {
    super();
    this.state = {
      longitude: '',
      latitude: '',
    };
  }
  render() {
    const { longitude, latitude } = this.state;
    const path = `https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false`;
    return (
      <View style={{ flex: 1, backgroundColor: '#1a0023' }}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/universe2.webp')}
          style={styles.backgroundImage}>
          <View style={styles.routeCard}>
            <Text style={styles.routeText}>Map Stars</Text>
            <Image
              source={require('../assets/stars.webp')}
              style={styles.routeImage}></Image>
          </View>
          <View
            style={{
              flex: 0.1,
              paddingHorizontal: 10,
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your longitude"
              placeholderTextColor="white"
              onChangeText={(text) => {
                this.setState({
                  longitude: text,
                });
              }}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your latitude"
              placeholderTextColor="white"
              onChangeText={(text) => {
                this.setState({
                  latitude: text,
                });
              }}
            />
          </View>
          <WebView
            scalesPageToFit={true}
            source={{ uri: path }}
            style={{ marginTop: 20, marginBottom: 20, borderRadius: 50 }}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 0,
    marginRight: 0,
    marginLeft: 10,
    textAlign: 'center',
    color: 'white',
    width: 180,
  },
  routeCard: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    flexDirection: 'row',
  },
  routeText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'cursive',
    paddingLeft: 10,
  },
  routeImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',

    // marginTop: 300,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
