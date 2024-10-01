import React, {useRef} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TextField = ({
  placeholder,
  value,
  onChangeText,
  iconName,
  iconSize = 24,
  iconColor = '#000',
  secureTextEntry,
}) => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
    inputRef.current.setNativeProps({borderColor: 'blue'});
  };

  const handleBlur = () => {
    inputRef.current.setNativeProps({borderColor: '#ccc'});
  };

  return (
    <View style={styles.container}>
      {iconName && (
        <Ionicons
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
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
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '95%',
    marginLeft: '2.5%',
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
