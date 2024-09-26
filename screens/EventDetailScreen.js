import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function EventDetailScreen({ route, navigation }) {
  const { event } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: event.url }} style={styles.image} />
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.description}>{event.body}</Text>
      <Button title="Book Now" onPress={() => navigation.navigate('Booking', { event })} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
});
