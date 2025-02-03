import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Event } from '@/types/interfaces'
import dayjs from 'dayjs';
import { Link } from 'expo-router';

const EventItem: React.FC<{ item: Event }> = ({ item }) => {
  const formatDate = (dateString: string) => {
    return dayjs(dateString).format('MMMM D');
  };

  return (
    <Link href={`/events/${item.ID}`} asChild>
      <TouchableOpacity>
        <View style={styles.eventItem}>
          <Text style={styles.eventTitle}>{item.post_title}</Text>
          {formatDate(item.start_date) != formatDate(item.end_date) ? (
            <Text style={styles.eventDate}>{formatDate(item.start_date)} - {formatDate(item.end_date)}</Text>
          ) : (
            <Text style={styles.eventDate}>{formatDate(item.start_date)}</Text>
          )}
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default EventItem

const styles = StyleSheet.create({
  eventItem: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,

  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',

  },
  eventDate: {
    fontSize: 16,
    color: 'gray',
  }
})