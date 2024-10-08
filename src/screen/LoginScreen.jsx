import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TextField from '../components/TextField';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to track loading animation
  const [emailError, setEmailError] = useState(''); // State for email error message
  const [passwordError, setPasswordError] = useState(''); // State for password error message
  const [showRequiredFieldsModal, setShowRequiredFieldsModal] = useState(false); // State to control modal visibility
  const [iconHover, setIconHover] = useState({
    mail: false,
    facebook: false,
    twitter: false,
  });

  const navigation = useNavigation();
  const handlesignup1 = () => {
    navigation.navigate('signup');
  };
  const handleForgotPassword = () => {
    navigation.navigate('forgotPassword');
  };
  const handleSignup = () => {
    // Validate email and password
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }

    if (!isPasswordValid) {
      setPasswordError('Password must be at least 8 characters long.');
    
    } else {
      setPasswordError('');
    }

    if (isEmailValid && isPasswordValid) {
      // Show loading animation
      setIsLoading(true);

      // Simulate signup process delay
      setTimeout(() => {
        setIsLoading(false); // Stop loading animation after delay

        navigation.navigate('MainBody'); // Navigate to login after delay
      }, 2000); // 2-second delay
    }
  };

  const handleGoBack = () => {
    navigation.goBack(); // Go back to the previous screen
  };

  // Validation functions
  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = password => {
    return password.length >= 8;
  };

  return (
    <ScrollView style={Style.container}>
      {/* arrow on the top of the screen */}
      <TouchableOpacity style={Style.Back_bnt} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={30} />
      </TouchableOpacity>

      {/* heading field of text */}
      <View>
        <Text style={Style.heading}>Login here</Text>
        <Text style={Style.subheading}>Welcome</Text>
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
          error={emailError}
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
          error={passwordError}
        />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={Style.forgot_text}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={Style.bnt}>
          {isLoading ? ( // Show loading spinner when isLoading is true
            <ActivityIndicator size="large" color="#FF8C00" />
          ) : (
            <CustomButton
              title="Login"
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
          Create account
          <TouchableOpacity onPress={handlesignup1} style={Style.textup}>
            <Text style={Style.bottom_text}> Sign up</Text>
          </TouchableOpacity>
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={showRequiredFieldsModal}
        onRequestClose={() => setShowRequiredFieldsModal(false)}
      >
        <View style={Style.modalContainer}>
          <View style={Style.modalContent}>
            <Text style={Style.modalText}>Please fill in all required fields.</Text>
            <TouchableOpacity
              style={Style.modalButton}
              onPress={() => setShowRequiredFieldsModal(false)}
            >
              <Text style={Style.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default LoginScreen;

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
    margin: 5,
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
  forgot_text: {
    color: 'blue',
    marginTop: 3,
    marginBottom: 9,
    fontSize: 16,
    textAlign: 'right',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});
