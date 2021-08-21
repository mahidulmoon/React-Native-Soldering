import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Linking,
} from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const prepareLocation = async () => {
    // 1- checks for permission
    let { status } = await Location.requestPermissionsAsync();
    if (status === 'granted') {
      // 2- fetch the location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const locationCoords = `${location.coords.latitude},${location.coords.longitude}`;
      Linking.openURL('mailto://support@expo.io');
    } else {
      setErrorMsg('Permission to access location was denied');
    }
  };

  useEffect(() => {
    prepareLocation();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
