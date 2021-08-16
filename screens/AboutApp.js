import React, { Component } from 'react';
import {
  View,
  Linking,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import {Icon} from "react-native-elements"
export default class AboutApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/universe1.webp')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/sticker.webp')}
              style={{ width: 120, height: 120, borderRadius: 50 }}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.titleText}>Unveiled</Text>
              <Text style={styles.titleText}>Universe</Text>
            </View>
          </View>

          <View style={styles.routeCard}>
            <Text style={styles.routeText}>Sources</Text>
             <Text style={styles.routeText}></Text>
            <Text style={styles.routeText}>Images: https://giphy.com</Text>
             <Text style={styles.routeText}>APIs: https://nasa.gov</Text>
              <Image
              source={require('../assets/nasa.webp')}
              style={styles.routeImage}></Image>
               <Text style={styles.routeText}></Text>
                <Text style={styles.routeText}></Text>
                <Text style={styles.routeText}></Text>
              <Text style={styles.routeText}>This app unveils the lesser known facts & details about the space.</Text>
              <Text style={styles.routeText}></Text>
               <Text style={styles.routeText}>Contact: <Icon name="github" type="font-awesome" color="#fff" size={25} onPress={()=> Linking.openURL("https://github.com/DIPNEET")} /></Text>
                 <Text style={styles.routeText}>Made with <Icon name="heart" type="font-awesome" color="pink" size={22} /> by Dipneet Kaur</Text>
                 
        
          </View>

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
    flex: 0.7,
    justifyContent: 'center',
      alignItems: 'center',
    margin: 14,
    // marginLeft: 60,
    // marginRight: 50,
    borderRadius: 20,
    // borderBottomLeftRadius: 10,
    backgroundColor: 'black',
    // width: 200,
  },
  titleBar: {
    flex: 0.4,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 25,
  },
  titleText: {
    fontSize: 30,
    padding: 0,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'cursive',
  },
  routeText: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:"center",
    fontFamily: 'cursive',
    // paddingLeft: 10,
  },
  routeImage: {
    // position: 'absolute',
    // top: -20,
    // right: -25,
    height: 60,
    width: 60,
    // resizeMode: 'contain',
    borderRadius: 70,
  },
});
