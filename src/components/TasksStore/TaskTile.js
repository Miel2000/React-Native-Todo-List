import React  from 'react';


import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';


const TaskTile = ({ id, title, completed, onTrashPress, onChangeStatus}) => {



    return (
        <TouchableOpacity
         
            onPress={() => onChangeStatus(id)}
            >
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Image
                        style={styles.icon}
                        source={ completed 
                            ? require('../../../assets/img/round_checked.png') 
                            : require('../../../assets/img/round_unchecked.png') } />
                    <Text style={styles.title, {color: completed ? 'lightgrey': 'black'}}>{title}</Text>

                </View>
        
        
                <TouchableOpacity onPress={ () => onTrashPress(id)}>
                    <Image
                        
                        style={styles.icon}
                        source={require('../../../assets/img/trash.png')}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    icon: {
        width:30,
        height: 30,
   
    },
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subContainer: {
        flexDirection: 'row',
        // justifyContent: 'flex-start'
        alignItems:'center'
    },
    title: {
        marginLeft:30
    }
})

export default TaskTile;