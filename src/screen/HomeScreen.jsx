import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

// Get device width and height for responsive styling
const {width, height} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation =useNavigation();
  const handlesignup=()=>{
    navigation.navigate('signup');
  }
  return (
    <ImageBackground
      source={require('../assets/welcom2.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.mainContainer}>
        <Image source={require('../assets/teck2.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome to NewTek</Text>

        <View style={styles.buttonContainer}>
          <CustomButton
            title="Let's Start"
            onPress={handlesignup}
            backgroundColor="#FF8C00"
            textColor="#fff"
            width={300}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginTop: -230,
    marginLeft: 30,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 100,
    marginTop: 8,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100, // This will push the button near the bottom
  },
});
