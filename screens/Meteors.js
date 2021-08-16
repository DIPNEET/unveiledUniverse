import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import axios from 'axios';

export default class Meteors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meteors: {},
    };
  }

  componentDidMount() {
    this.getMeteors();
  }

  getMeteors = () => {
    axios
      .get(
        'https://api.nasa.gov/neo/rest/v1/feed?api_key=gtuEh7E288L4hmnVbNB6sT8cztsMlPyPbkdD3plc'
      )
      .then((response) => {
        this.setState({ meteors: response.data.near_earth_objects });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  renderItem = ({ item }) => {
    let meteor = item;
    let bg_img, speed
    if (meteor.threat_score <= 30) {
    
      speed = require('../assets/meteorfall.webp');
     
    } else if (meteor.threat_score <= 75) {
      
      speed = require('../assets/meteorfall.webp');
    
    } else {
     
      speed = require('../assets/meteorfall.webp');
     
    }
    return (
      <View styles={styles.container}>
        <ImageBackground source={require("../assets/universe2.webp")} style={styles.backgroundImage}>
          <View styles={styles.gifContainer}>

            <Image
              source={speed}
              style={{
                width: 250,
                height: 250,
                alignSelf: 'center',
              }}></Image>
              
               </View>
            <View styles={styles.gifContainer1}>
              <Text
                style={[styles.cardTitle, { marginTop: 70, marginLeft: 30 }]}>
                {item.name}
              </Text>
              <Text
                style={[styles.cardText, { marginTop: 20, marginLeft: 30 }]}>
                Closest to Earth -{' '}
                {item.close_approach_data[0].close_approach_date_full}
              </Text>
              <Text style={[styles.cardText, { marginTop: 5, marginLeft: 30 }]}>
                Minimum Diameter (KM) -{' '}
                {item.estimated_diameter.kilometers.estimated_diameter_min}
              </Text>
              <Text style={[styles.cardText, { marginTop: 5, marginLeft: 30 }]}>
                Maximum Diameter (KM) -{' '}
                {item.estimated_diameter.kilometers.estimated_diameter_max}
              </Text>
              <Text style={[styles.cardText, { marginTop: 5, marginLeft: 30 }]}>
                Velocity (KM/H) -{' '}
                {
                  item.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                }
              </Text>
              <Text style={[styles.cardText, { marginTop: 5, marginLeft: 30 }]}>
                Missing Earth by (KM) -{' '}
                {item.close_approach_data[0].miss_distance.kilometers}
              </Text>
            </View>
            
         
          <Image
              source={require("../assets/next.webp")}
              style={{
                width: 100,
                height: 30,
                alignSelf: 'center',
                marginBottom:3,
                marginTop:90
              }}></Image>
        </ImageBackground>
      </View>
    );
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    if (Object.keys(this.state.meteors).length === 0) {
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
      let meteor_arr = Object.keys(this.state.meteors).map((meteor_date) => {
        return this.state.meteors[meteor_date];
      });
      let meteors = [].concat.apply([], meteor_arr);
      meteors.forEach(function (element) {
        let diameter =
          (element.estimated_diameter.kilometers.estimated_diameter_min +
            element.estimated_diameter.kilometers.estimated_diameter_max) /
          2;
        let threatScore =
          (diameter / element.close_approach_data[0].miss_distance.kilometers) *
          1000000000;
        element.threat_score = threatScore;
      });
      meteors.sort(function (a, b) {
        return b.threat_score - a.threat_score;
      });
      meteors = meteors.slice(0, 5);
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <FlatList
            keyExtractor={this.keyExtractor}
            data={meteors}
            renderItem={this.renderItem}
            horizontal={true}
          />
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
 
  cardTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  cardText: {
    color: 'white',
  },
 
  gifContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
  },
   gifContainer1: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.5,
    // position:"absolute",
   
  
  },
   routeCard: {
    
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    flexDirection:"row"
  },
  routeText: {
    fontSize: 16,
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
