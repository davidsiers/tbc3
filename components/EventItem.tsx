import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Event } from '@/types/interfaces'

const EventItem: React.FC<{item: Event}> = ({item}) => {
  return (
    <View style={styles.eventItem}>
      <Text style={styles.eventTitle}>{item.post_title}</Text>
    </View>
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
})