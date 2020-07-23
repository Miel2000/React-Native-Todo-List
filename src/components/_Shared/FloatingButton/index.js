import React, { useState } from 'react';
import {  Text, StyleSheet, TouchableOpacity } from 'react-native';


const FloatingButton = ({ onPressFloatingBtn, isFormOpened}) => {
    return (
        <TouchableOpacity onPress={() => onPressFloatingBtn() } style={styles.container}>
            {isFormOpened ? <Text style={styles.titleMoins}>-</Text>  : <Text style={styles.titlePlus}>+</Text> }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        bottom: 20,
        right:20,
        width:50,
        height:50,
        borderRadius:100,
        backgroundColor: 'orange',
        justifyContent:'center',
        alignItems:'center'
    },
    titlePlus: {
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        fontSize:25
       
    },
        titleMoins: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    }
})


export default FloatingButton;