import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Event } from '@/types/interfaces'
import { ExternalPathString, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const EventRegisterButton: React.FC<{ event: Event, buttonNumber?: String }> = ({ event, buttonNumber }) => {

    if (buttonNumber == '1') {
        return (
            <Link href={event.custom_fields._ctc_event_registration_url[0].toString() as ExternalPathString} asChild>
                <TouchableOpacity style={styles.registerButton}>
                    <Ionicons style={styles.registerButtonIcon} name={
                        (event.custom_fields.register_button_icon[0]) ?
                            event.custom_fields.register_button_icon[0] as any : 'ticket'
                    }></Ionicons>
                    <Text style={styles.registerButtonText}>{
                        (event.custom_fields.register_button_text[0]) ? event.custom_fields.register_button_text[0] : 'Register'
                    }</Text>
                </TouchableOpacity>
            </Link>)
    }

    if (buttonNumber == '2') {
        return (
            <Link href={event.custom_fields.event_button_2_register_button_2_url[0].toString() as ExternalPathString} asChild>
                <TouchableOpacity style={styles.registerButton}>
                    <Ionicons style={styles.registerButtonIcon} name={
                        (event.custom_fields.event_button_2_register_button_2_icon[0]) ?
                            event.custom_fields.event_button_2_register_button_2_icon[0] as any : 'ticket'
                    }></Ionicons>
                    <Text style={styles.registerButtonText}>{
                        (event.custom_fields.event_button_2_register_button_2_text[0]) ? event.custom_fields.event_button_2_register_button_2_text[0] : 'Register'
                    }</Text>
                </TouchableOpacity>
            </Link>)
    }

    if (buttonNumber == '3') {
        return (
            <Link href={event.custom_fields.event_button_3_register_button_3_url[0].toString() as ExternalPathString} asChild>
                <TouchableOpacity style={styles.registerButton}>
                    <Ionicons style={styles.registerButtonIcon} name={
                        (event.custom_fields.event_button_3_register_button_3_icon[0]) ?
                            event.custom_fields.event_button_3_register_button_3_icon[0] as any : 'ticket'
                    }></Ionicons>
                    <Text style={styles.registerButtonText}>{
                        (event.custom_fields.event_button_3_register_button_3_text[0]) ? event.custom_fields.event_button_3_register_button_3_text[0] : 'Register'
                    }</Text>
                </TouchableOpacity>
            </Link>)
    }

    if (buttonNumber == '4') {
        return (
            <Link href={event.custom_fields.event_button_4_register_button_4_url[0].toString() as ExternalPathString} asChild>
                <TouchableOpacity style={styles.registerButton}>
                    <Ionicons style={styles.registerButtonIcon} name={
                        (event.custom_fields.event_button_4_register_button_4_icon[0]) ?
                            event.custom_fields.event_button_4_register_button_4_icon[0] as any : 'ticket'
                    }></Ionicons>
                    <Text style={styles.registerButtonText}>{
                        (event.custom_fields.event_button_4_register_button_4_text[0]) ? event.custom_fields.event_button_4_register_button_4_text[0] : 'Register'
                    }</Text>
                </TouchableOpacity>
            </Link>)
    }



    return (
        <Link href={event.custom_fields._ctc_event_registration_url[0].toString() as ExternalPathString} asChild>
            <TouchableOpacity style={styles.registerButton}>
                <Ionicons style={styles.registerButtonIcon} name={
                    (event.custom_fields.register_button_icon[0]) ?
                        event.custom_fields.register_button_icon[0] as any : 'ticket'
                }></Ionicons>
                <Text style={styles.registerButtonText}>{
                    (event.custom_fields.register_button_text[0]) ? event.custom_fields.register_button_text[0] : 'Register'
                }</Text>
                <Text style={styles.registerButtonText}>Button Nunber: {buttonNumber}</Text>
            </TouchableOpacity>
        </Link>
    )
}

export default EventRegisterButton

const styles = StyleSheet.create({
    registerButton: {
        backgroundColor: '#152A41',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 15,
        paddingHorizontal: 10,
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    registerButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    registerButtonIcon: {
        fontSize: 20,
        color: '#fff',
        marginRight: 10,
    }
})