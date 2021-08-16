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
import {Icon} from "react-native-elements"

export default class Home extends Component {
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
              style={{ width: 120, height: 120,borderRadius:50}}/>
              <View style={{flexDirection:"column"}}>
            <Text style={styles.titleText}>Unveiled</Text>
               <Text style={styles.titleText}>Universe</Text>
           </View>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Spacecrafts')}>
            <Text style={styles.routeText}>Spacecrafts</Text>
            <Image
              source={require('../assets/craft.webp')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>
             <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('SpaceStation')}>
            <Text style={styles.routeText}>Space Station</Text>

            <Image
              source={require('../assets/station.webp')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Meteors')}>
            <Text style={styles.routeText}>Meteors</Text>

            <Image
              source={require('../assets/meteorfall.webp')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('MapStars')}>
            <Text style={styles.routeText}>Star Map</Text>
            <Image
              source={require('../assets/stars.webp')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('Mars')}>
            <Text style={styles.routeText}>Explore Mars</Text>
            <Image
              source={require('../assets/mars.webp')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('NasaImages')}>
            <Text style={styles.routeText}>APOD</Text>
            <Image
              source={require('../assets/gallery.webp')}
              style={styles.routeImage}></Image>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('AboutApp')}>
            <Text style={styles.routeText}>Developer Note <Icon name="heart" type="font-awesome" color="pink" size={22} /></Text>
          
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
    flex: 0.12,
    justifyContent: 'center',
    //  alignItems: 'center',
    margin: 15,
     marginLeft: 60,
    marginRight: 50,
    borderRadius: 10,
    // borderBottomLeftRadius: 10,
    backgroundColor: 'black',
    width:200
  },
  titleBar: {
    flex: 0.4,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection:"row",
    marginLeft:25
  },
  titleText: {
    fontSize: 30,
    padding:0,
    fontWeight: 'bold',
    color: 'white',
    fontFamily:'cursive',

  },
  routeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
     fontFamily:'cursive',
     paddingLeft:10
  },
  routeImage: {
     position: 'absolute',
    top: -20,
    right: -25,
    height: 60,
    width: 60,
    // resizeMode: 'contain',
    borderRadius:70
  },
});
