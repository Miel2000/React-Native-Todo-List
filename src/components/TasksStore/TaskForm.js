import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import TasksList from './TasksList';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions';


const TaskForm = () => {

    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const _onChangeText = (value) => {

        setTitle(value);
    }

    const _onPressButton = () => {
        if(title.length > 0) {
            dispatch(addTask(title));
            setTitle('');
        }
 
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput value={title} onChangeText={ _onChangeText }  />
            </View>
            <Button
                onPress={_onPressButton}
                title="Ajouter"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flexDirection: "row",
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom: 15
    },
    containerInput : {
        width:"75%",
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 4,
        paddingLeft: 7,
        marginBottom: 15
    }
})

export default TaskForm;