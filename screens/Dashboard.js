import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class Dashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/aboutUniverse.webp')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.titleText}>Unveiled Universe</Text>
              <Text style={styles.titleText1}>By Dipneet Kaur</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Image
              source={require('../assets/tap.webp')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 520,
    marginLeft: 20,
    // marginRight: 50,
    // flex:'end',
    borderRadius: 130,
    backgroundColor: '#ad6242',
    width: 110,
    height: 110,
  },
  titleBar: {
    flex: 0.4,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 25,
    marginTop: 60,
  },
  titleText: {
    fontSize: 30,
    padding: 0,
    fontWeight: 'bold',
    textAlign:"center",
    fontFamily: 'cursive',
    color: '#fff',
  },
   titleText1: {
    fontSize: 12,
    padding: 0,
    fontWeight: 'bold',
 textAlign:"center",
    fontFamily: 'cursive',
    color: '#fff',
  },
  routeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'cursive',
    // paddingLeft: 10,
    textAlign: 'center',
  },
  routeImage: {
    // position: 'absolute',
    // top: -20,
    // right: -25,
    height: 100,
    width: 100,
    // resizeMode: 'contain',
    borderRadius: 70,
    borderWidth: 8,
    // borderColor: 'red',
  },
});
