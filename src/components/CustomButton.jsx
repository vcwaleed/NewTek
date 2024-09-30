import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ 
  title, 
  onPress, 
  backgroundColor = '#FF8C00', 
  textColor = '#fff', 
  width = 200, 
  height = 50 
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor, width, height }]}
      onPress={onPress}
      activeOpacity={0.8} // To make the button look pressed when touched
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 10, // Slightly larger border radius
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 18, // Larger font size
    fontWeight: 'bold',
  },
});

export default CustomButton;
