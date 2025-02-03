import { ActivityIndicator, Button, FlatList, Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ExternalPathString, Link, useLocalSearchParams } from 'expo-router'
import Categories from '@/components/Categories';
import { Event } from '@/types/interfaces';
import dayjs from 'dayjs';
import RenderHtml from 'react-native-render-html';
import { Ionicons } from '@expo/vector-icons';
import EventRegisterButton from '@/components/EventRegisterButton';

const Page = () => {
  const id = useLocalSearchParams();
  console.log("🚀 ~ Page ~ id:", id);

  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const formatDate = (dateString: string, addDay?: boolean) => {
    if (addDay) { return dayjs(dateString).format('dddd, MMMM D'); }
    else { return dayjs(dateString).format('MMMM D'); }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://tucsonbaptist.com/wp-json/invitely/v1/events/${id.id}`);
      const data = await response.json();
      console.log("🚀 ~ fetchEvent ~ data:", data)
      setEvent(data);
    } catch (error) {
      console.log(error);
      setError('An error occurred. Please try again later.');
    }
    setLoading(false);
  }

  if (loading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator />
      </View>
    )
  }

  if (!event) {
    return (
      <View>
        <Text>Event not found</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.eventContainer}>
          <Image source={{ uri: event.featured_image }} style={styles.img} />
          {(event.categories.length > 0) ? (
            <View style={styles.categoriesContainer}>
              {event.categories.map((category) => (
                <Categories key={category.term_id} item={category} />
              ))}
            </View>
          ) : null}
          <View style={styles.titleContainer}>
            <Text style={styles.post_title}>{event.post_title}</Text>
            {formatDate(event.start_date) != formatDate(event.end_date) ? (
              <Text style={styles.eventDate}>{formatDate(event.start_date, true)} - {formatDate(event.end_date)}</Text>
            ) : (
              <Text style={styles.eventDate}>{formatDate(event.start_date, true)}</Text>
            )}
          </View>
          <RenderHtml
            contentWidth={100}
            source={{ html: event.post_content }}
            defaultTextProps={{ style: styles.post_content }}
            tagsStyles={{
              body: { whiteSpace: 'pre'},
              p: { marginVertical: 10 },
              h1: { fontSize: 24, fontWeight: 'bold' },
              h2: { fontSize: 20, fontWeight: 'bold' },
              // Add more tag styles as needed
            }}
          />
          {event.custom_fields._ctc_event_registration_url[0] ?
            (<EventRegisterButton event={event} buttonNumber={'1'} />) : null}
          {event.custom_fields.event_button_2_register_button_2_url[0] ?
            (<EventRegisterButton event={event} buttonNumber={'2'} />) : null}
          {event.custom_fields.event_button_3_register_button_3_url[0] ?
            (<EventRegisterButton event={event} buttonNumber={'3'} />) : null}
          {event.custom_fields.event_button_4_register_button_4_url[0] ?
            (<EventRegisterButton event={event} buttonNumber={'4'} />) : null}
        </View>
      </ScrollView>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 15,
  },
  eventContainer: {
    marginVertical: 20,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titleContainer: {
    marginVertical: 10,
  },
  post_title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  post_content: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5A5A5A'
  },
  eventDate: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
})