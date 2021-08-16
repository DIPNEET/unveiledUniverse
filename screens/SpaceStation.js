import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Image,
  Alert,
  Platform,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';

export default class SpaceStation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
    };
  }

  componentDidMount() {
    this.getIssLocation();
  }

  getIssLocation = () => {
    axios
      .get('https://api.wheretheiss.at/v1/satellites/25544')
      .then((response) => {
        this.setState({ location: response.data });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    if (Object.keys(this.state.location).length === 0) {
      return (
        <View style={{ flex: 1 }}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require('../assets/spacecraft.webp')}
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
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require('../assets/universe2.webp')}
            style={styles.backgroundImage}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>International Space Station </Text>
              <View style={{flexDirection:"row"}}>
              <Text style={styles.titleText}>Location</Text>
              <Image
                source={require('../assets/station.webp')}
                style={styles.routeImage}></Image></View>
              
            </View>
            <View style={styles.mapContainer}>
        
           <MapView
            style={styles.map}
            region={{
              latitude: this.state.location.latitude,
              longitude: this.state.location.longitude,
              latitudeDelta: 100,
              longitudeDelta: 100,
            }}>
             <Marker
              coordinate={{
                latitude: this.state.location.latitude,
                longitude: this.state.location.longitude,
              }}>
              <Image
                source={require('../assets/station.webp')}
                style={{ height: 50, width: 50 }}
              />
             </Marker>
           </MapView>
         
        
            </View>
            <View style={styles.routeCard}>
              <Text style={styles.routeText}>
                Latitude: {this.state.location.latitude}
              </Text>
              <Text style={styles.routeText}>
                Longitude: {this.state.location.longitude}
              </Text>
              <Text style={styles.routeText}>
                Altitude (KM): {this.state.location.altitude}
              </Text>
              <Text style={styles.routeText}>
                Velocity (KM/H): {this.state.location.velocity}
              </Text>
            </View>
          </ImageBackground>
        </View>
      );
    }
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
  titleContainer: {
    marginTop:5,
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    padding: 2,
    fontWeight: 'bold',
    color: 'white',
    fontFamily:'cursive'
  },
  mapContainer: {
    flex: 0.65,
    margin:7,
    
  },
  map: {
    width: '100%',
    height: '100%',
    borderRadius:50
  },
  infoContainer: {
    flex: 0.2,
    backgroundColor: 'white',
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },
  infoText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
  routeCard: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 150,
    flex: 0.2,
    alignSelf: 'center',
    margin: 10,
    //  backgroundColor:'lightgreen'
  },
  routeText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'cursive',
    padding: 3,
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
