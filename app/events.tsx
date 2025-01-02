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

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://tucsonbaptist.com/wp-json/invitely/v1/events');
      const data = await response.json();
      console.log("🚀 ~ fetchEvents ~ data:", data)
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setRefreshing(false);
  }

  useEffect(() => {
    fetchEvents();
  } ,[]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchEvents();
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={item => item.ID.toString()}
        renderItem={({ item }) => <EventItem item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={<ListEmptyComponent loading={loading} message='No Events Found.' />}
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