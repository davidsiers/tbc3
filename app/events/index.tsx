import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '@/assets/colors';
import { Event } from '@/types/interfaces';
import EventItem from '@/components/EventItem';
import ListEmptyComponent from '@/components/ListEmptyComponent';

const Page = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://tucsonbaptist.com/wp-json/invitely/v1/events');
      const data = await response.json();
      console.log("🚀 ~ fetchEvents ~ data:", data)
      setEvents(data);
    } catch (error) {
      console.log(error);
      setError('An error occurred. Please try again later.');
    }
    setLoading(false);
    setRefreshing(false);
  }

  useEffect(() => {
    fetchEvents();
  } ,[]);

  const renderItem = ({ item }: {item:Event}) => {
    return <EventItem item={item} />
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchEvents();
  }

  const refreshControl = (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  );

  const listEmptyComponent = (
    <ListEmptyComponent loading={loading} message='No Events Found.' />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={item => item.ID.toString()}
        renderItem={renderItem}
        refreshControl={refreshControl}
        ListEmptyComponent={listEmptyComponent}
      />
    </View>
  )
}

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  }
})