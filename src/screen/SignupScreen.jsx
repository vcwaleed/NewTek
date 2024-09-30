import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignupScreen = () => {
  return (
    <>
      <View style={Style.container}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={30} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignupScreen;

const Style = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    backgroundColor:'#808080',

  },
});
