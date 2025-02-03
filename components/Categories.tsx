import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Category, Event } from '@/types/interfaces'
import { Link } from 'expo-router';

const Categories: React.FC<{ item: Category }> = ({ item }) => {

  return (
    <Link href={`/events/${item.term_id}`} asChild>
      <TouchableOpacity>
        <View>
          <Text style={styles.category}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

export default Categories

const styles = StyleSheet.create({
    category: {
        backgroundColor: '#D3D3D3',
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginTop: 15,
        marginRight: 10,
        borderRadius: 8,
        fontSize: 12,
        fontWeight: '500'
    }
})