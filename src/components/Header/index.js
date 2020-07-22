import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Header() {

    const maDate = new Date();

    const days = [
        'Dimanche',
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi'
    ];

    const months = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Aout",
        "Septembre",
        "Octobre",
        "Novembre",
        "Decembre"
    ];


    return (
        <View style={styles.container}>
            <Text style={styles.title}>La date : {days[maDate.getDay()] + ' ' + maDate.getDate() + ' ' + months[maDate.getMonth()]}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container :  {
        marginTop: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
    }

})