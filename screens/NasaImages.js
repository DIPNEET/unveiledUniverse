import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  StatusBar,
  SafeAreaView,
  Linking,
  ScrollView,
} from 'react-native';

import axios from 'axios';

export default class NasaImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: [],
    };
  }

  componentDidMount() {
    this.getAPOD();
  }

  getAPOD = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=gtuEh7E288L4hmnVbNB6sT8cztsMlPyPbkdD3plc'
      )
      .then((response) => {
        this.setState({ apod: response.data });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  renderImage = (url) => {
    <Image
      source={{ uri: url }}
      style={{
        width: '100%',
        height: 300,
        borderRadius: 20,
        margin: 3,
      }}></Image>;
  };

  renderVideo = () => {
    <TouchableOpacity
      style={styles.listContainer}
      onPress={() =>
        Linking.openURL(this.state.apod.url).catch((err) =>
          console.error("Couldn't load page", err)
        )
      }>
      <View style={styles.iconContainer}>
        <Image
          source={require('../assets/gallery.webp')}
          style={{ width: 50, height: 50 }}></Image>
      </View>
    </TouchableOpacity>;
  };

  render() {
    const url = this.state.apod.url;
    if (Object.keys(this.state.apod).length === 0) {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require('../assets/universe2.webp')}
            style={styles.backgroundImage}>
            <View style={styles.routeCard}>
              <Image
                source={require('../assets/loading.webp')}
                style={styles.routeImage}></Image>
              <Text style={styles.routeText}>Loading...</Text>
            </View>
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <View
          style={[
            styles.container,
            { justifyContent: 'center', alignItems: 'center' },
          ]}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require('../assets/universe2.webp')}
            style={styles.backgroundImage}>
            <View style={styles.routeCard}>
              <Text style={styles.routeText1}>Picture of the day!</Text>
              
              <Image
                source={require('../assets/gallery.webp')}
                style={styles.routeImage}></Image>
            </View>
            <ScrollView style={styles.listContainer}>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(this.state.apod.url).catch((err) =>
                    console.error("Couldn't load page", err)
                  )
                }>
                <Image
                  source={{ uri: url }}
                  style={{
                    width: '100%',
                    height: 300,
                    borderRadius: 50,
                    // margin:10,
                    borderColor:'#fff',
                    borderWidth:2
                  }}></Image>
              </TouchableOpacity>
              <View style={{ padding: 20 }}>
                <Text style={styles.titleText}>{this.state.apod.title}</Text>
                <Text style={styles.explanationText}>
                  {this.state.apod.explanation}
                </Text>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FF00FF',
    textAlign: 'center'
  },
  explanationText: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    // margin: 10,
    textAlign: 'center'
  },
  listContainer: {
    // backgroundColor: 'rgba(52, 52, 52, 0.5)',
    flex: 0.8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    borderRadius: 10,
   
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeCard: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
     flexDirection: 'row',
  },
  routeText1: {
    fontSize: 23,
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
