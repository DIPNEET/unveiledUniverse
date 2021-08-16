import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

import axios from 'axios';

export default class Mars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aircrafts: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=gtuEh7E288L4hmnVbNB6sT8cztsMlPyPbkdD3plc'
      )
      .then((response) => {
        this.setState({ aircrafts: response.data.photos });
        console.log(this.state.aircrafts);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  renderItem = ({ item }) => {
    return (
      <View style={styles.contentCard}>
        <Image source={{ uri: item.img_src }} style={styles.itemImage}></Image>
        <View style={{ padding: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>
            Rover Name: {item.rover.name}
          </Text>
          <Text style={{ color: '#f9ff69', fontSize: 16 }}>
            Landing Date: {item.rover.landing_date}
          </Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: '#fff', fontSize: 13 }}>
              Taken on: {item.earth_date}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  keyExtractor = (item, index) => index.toString();
  render() {
    if (this.state.aircrafts.length === 0) {
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
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <ImageBackground
            source={require('../assets/universe2.webp')}
            style={styles.backgroundImage}>
            <View style={styles.routeCard}>
              <Text style={styles.routeText}>M A R S</Text>
              <Image
                source={require('../assets/mars.webp')}
                style={styles.routeImage}></Image>
            </View>
            <View style={{ flex: 0.96 }}>
              <Text style={{color:"white",textAlign:"center",marginBottom:2}}>
                The images gathered by NASA's
                Curiosity, Opportunity, and Spirit rovers on Mars!
              </Text>
               
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.aircrafts}
                renderItem={this.renderItem}
                initialNumToRender={5}
              />
            </View>
            <Text style={{color:"grey",textAlign:"center",marginBottom:1,fontSize:10,marginTop:2}}>
                Source: nasa.gov (API maintained by Chris Cerami)
              </Text>
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
  titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignContent: 'center',
  },
  contentCard: {
    borderRadius: 5,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,

    backgroundColor: '#ad6242',
  },
  itemImage: {
    width: '100%',
    height: 200,
    // marginBottom: 15,
    // marginLeft: 10,
    // marginRight: 10,
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: 20,
    // marginTop: 300,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
