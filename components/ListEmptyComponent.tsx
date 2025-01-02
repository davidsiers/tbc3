import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '@/assets/colors';

interface ListEmptyComponentProps {
    loading: boolean;
    message?: string;
}

const ListEmptyComponent = ({ loading, message = 'No Events Found.' }: ListEmptyComponentProps) => {
    return (
        <View style={styles.emptyContainer}>
            {(loading) ?
                (<ActivityIndicator size="large" color={colors.tbc.teal} />) :
                (<Text style={styles.emptyText}>{message}</Text>)}
        </View>
    )
}

export default ListEmptyComponent

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
    },
    emptyText: {
        fontSize: 18,
        color: "#333",
    }
})