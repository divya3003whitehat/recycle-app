import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const ShoppingButtons = ({ navigation }) => {
  const openWebsite = (url) => {
    // You can use a library like 'react-native-inappbrowser-reborn' to open web URLs.
    // Make sure to install it and set it up in your project.
    // Here, we'll simply navigate to a WebView screen for demonstration.
    navigation.navigate('WebScreen', { url });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.smallButton]}
        onPress={() => openWebsite('https://www.amazon.com')}
      >
        <Text style={styles.buttonText}>Amazon</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.mediumButton]}
        onPress={() => openWebsite('https://www.ebay.com')}
      >
        <Text style={styles.buttonText}>eBay</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.largeButton]}
        onPress={() => openWebsite('https://www.walmart.com')}
      >
        <Text style={styles.buttonText}>Walmart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  smallButton: {
    width: 100,
    height: 40,
    backgroundColor: 'blue',
  },
  mediumButton: {
    width: 150,
    height: 60,
    backgroundColor: 'green',
  },
  largeButton: {
    width: 200,
    height: 80,
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ShoppingButtons;