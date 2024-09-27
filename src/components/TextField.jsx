
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from 'react-native-vector-icons/FontAwesome';

const TextField = ({ placeholder, value, onChangeText, iconName, iconSize = 24, iconColor = '#000', secureTextEntry }) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <FontAwesome name={iconName} size={iconSize} color={iconColor} style={styles.icon} />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default TextField;
