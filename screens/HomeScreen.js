import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(response => {
        setEvents(response.data);
        setFilteredEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = events.filter(event => event.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredEvents(filtered);
  };

  const renderEvent = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('EventDetail', { event: item })}>
      <View style={{ margin: 10, padding: 10, borderWidth: 1, borderRadius: 5, flexDirection: 'row' }}>
        <Image source={{ uri: item.thumbnailUrl }} style={{ height: 100, width: 100, borderRadius: 10 }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
          <Text>Date: {new Date().toLocaleDateString()}</Text>
          <Text>Location: Event Hall 1</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={{ padding: 10 }}>
      <TextInput
        placeholder="Search events..."
        value={searchQuery}
        onChangeText={handleSearch}
        style={{ borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 20 }}
      />
      <FlatList
        data={filteredEvents}
        renderItem={renderEvent}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
