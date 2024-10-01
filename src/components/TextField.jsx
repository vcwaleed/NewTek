import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
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
  const [isFocused, setIsFocused] = React.useState(false); // State to handle focus

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current.setNativeProps({ borderColor: 'blue' });
  };

  const handleBlur = () => {
    setIsFocused(false);
    inputRef.current.setNativeProps({ borderColor: '#ccc' });
  };

  return (
    <View
      style={[
        styles.container,
        { borderColor: isFocused ? 'blue' : '#ccc' }, // Change border color based on focus state
      ]}
    >
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
    borderRadius: 8, // Reduced the border radius
    paddingHorizontal: 8, // Reduced padding to decrease height
    marginVertical: 8, // Adjusted vertical margin
    width: '95%',
    marginLeft: '2.5%',
    height: 58, // Reduced the height of the text field
    backgroundColor: '#f9f9f9', // Added a subtle background color
  },

  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10, // Adjusted padding to fit height change
    color: '#333', // Text color
  },
});

export default TextField;
