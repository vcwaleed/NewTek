import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextField from '../components/TextField';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to track loading animation

  const [iconHover, setIconHover] = useState({
    mail: false,
    facebook: false,
    twitter: false,
  });

  const navigation = useNavigation();
const handlesignup1=()=>{
  navigation.navigate('login');
}
  const handleSignup = () => {
    // Show loading animation
    setIsLoading(true);

    // Simulate signup process delay
    setTimeout(() => {
      setIsLoading(false); // Stop loading animation after delay

      navigation.navigate('login'); // Navigate to login after delay
    }, 2000); // 2-second delay
  };

  const handleGoBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  return (
    <ScrollView style={Style.container}>
      {/* arrow on the top of the screen */}
      <TouchableOpacity style={Style.Back_bnt} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={30} />
      </TouchableOpacity>

      {/* heading field of text */}
      <View>
        <Text style={Style.heading}>Create Account</Text>
        <Text style={Style.subheading}>
          Create account so you can access all features
        </Text>
      </View>

      {/* input fields */}
      <View style={Style.input_fields}>
        {/* Email Field with Icon */}
        <TextField
          placeholder={'ENTER YOUR EMAIL'}
          value={email}
          onChangeText={setEmail}
          iconName="mail"
          iconSize={24}
          iconColor="#000"
        />
        {/* Password Field with Lock Icon */}
        <TextField
          placeholder={'ENTER YOUR PASSWORD'}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          iconName="lock-closed"
          iconSize={24}
          iconColor="#000"
        />
        {/* Confirm Password Field with Lock Icon */}
        <TextField
          placeholder={'CONFIRM YOUR PASSWORD'}
          secureTextEntry={true}
          iconName="lock-closed"
          iconSize={24}
          iconColor="#000"
        />
        <View style={Style.bnt}>
          {isLoading ? ( // Show loading spinner when isLoading is true
            <ActivityIndicator size="large" color="#FF8C00" />
          ) : (
            <CustomButton
              title="Sign Up"
              onPress={handleSignup}
              backgroundColor="#FF8C00"
              textColor="#fff"
              width={370}
            />
          )}
        </View>
      </View>

      <View>
        <Text style={Style.textup}>
          Already have an account?
          <TouchableOpacity  onPress={handlesignup1} style={Style.textup}><Text style={Style.bottom_text}> Sign In</Text></TouchableOpacity>
          
        </Text>
      </View>

      <View>
        <Text style={Style.lst1}>or continue with</Text>
      </View>

      {/* Hover Icons */}
      <View style={Style.icons}>
        <TouchableOpacity
          style={[
            Style.Back_bnt1,
            iconHover.mail
              ? {backgroundColor: '#ddd'}
              : {backgroundColor: 'white'},
          ]}
          onPressIn={() => setIconHover({...iconHover, mail: true})}
          onPressOut={() => setIconHover({...iconHover, mail: false})}>
          <Ionicons name="mail" size={27} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            Style.Back_bnt1,
            iconHover.facebook
              ? {backgroundColor: '#ddd'}
              : {backgroundColor: 'white'},
          ]}
          onPressIn={() => setIconHover({...iconHover, facebook: true})}
          onPressOut={() => setIconHover({...iconHover, facebook: false})}>
          <Ionicons name="logo-facebook" size={27} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            Style.Back_bnt1,
            iconHover.twitter
              ? {backgroundColor: '#ddd'}
              : {backgroundColor: 'white'},
          ]}
          onPressIn={() => setIconHover({...iconHover, twitter: true})}
          onPressOut={() => setIconHover({...iconHover, twitter: false})}>
          <Ionicons name="logo-twitter" size={27} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const Style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  Back_bnt: {
    backgroundColor: 'white',
    height: 40,
    width: 45,
    borderRadius: 20,
    paddingTop: 5,
    paddingLeft: 5,
  },
  Back_bnt1: {
    height: 40,
    width: 60,
    borderRadius: 30,
    paddingTop: 5,
    paddingLeft: 5,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 20,
    color: '#7F00FF',
    textAlign: 'center',
  },
  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  bottom_text: {
    color: '#7F00FF',
    fontWeight: 'bold',
    margin:5,
    
  },
  textup: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  lst1: {
    textAlign: 'center',
    marginTop: 10,
    color: 'blue',
    fontSize: 16,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  bnt: {
    justifyContent: 'center',
    alignContent: 'center',
  },

});
