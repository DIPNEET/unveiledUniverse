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

export default class Spacecrafts extends Component {
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
      .get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/')
      .then((response) => {
        this.setState({ aircrafts: response.data.results });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.contentCard}>
        <Image
          source={{ uri: item.agency.image_url }}
          style={styles.itemImage}></Image>
        <View style={{ padding: 20 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'purple' }}>
            {item.name}
          </Text>
          <Text style={{ color: '#696969', fontSize: 16 }}>
            {item.agency.name}
          </Text>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: '#A9A9A9', fontSize: 13 }}>
              {item.agency.description}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    if (Object.keys(this.state.aircrafts).length === 0) {
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
            <View
              style={
               styles.routeCard
              }>
              <Text style={styles.titleText}>Spacecrafts</Text>
              <Image
                source={require('../assets/craft.webp')}
                style={styles.routeImage}></Image>
            </View>
            <View style={{ flex: 0.96 }}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.aircrafts}
                renderItem={this.renderItem}
                initialNumToRender={10}
              />
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
  titleText: {
    fontSize: 30,
    padding: 8,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'cursive',
  },
  contentCard: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    elevation: 10,
    backgroundColor: '#ffe9e6',
  },
  itemImage: {
    width: '100%',
    height: 200,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
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
