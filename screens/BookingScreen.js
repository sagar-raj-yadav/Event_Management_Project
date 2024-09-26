import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BookingScreen({ route }) {
  const { event } = route.params;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tickets, setTickets] = useState('1');

  const handleBooking = async () => {
    const bookingInfo = {
      eventTitle: event.title,
      name,
      email,
      tickets,
      date: new Date().toLocaleDateString(),
    };

    try {
      await AsyncStorage.setItem('booking', JSON.stringify(bookingInfo));
      Alert.alert(
        'Booking Confirmed',
        `Thank you, ${name}, for booking ${tickets} ticket(s) for "${event.title}" on ${new Date().toLocaleDateString()}!`
      );
    } catch (error) {
      console.log('Error saving booking info', error);
      Alert.alert('Error', 'Could not save booking information');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Booking for {event.title}</Text>
      <TextInput
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Number of Tickets"
        value={tickets}
        onChangeText={setTickets}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Confirm Booking" onPress={handleBooking} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});
