import React, { useState } from 'react';
import {View,  StyleSheet} from 'react-native';
import Counter from '../_Shared/Counter/index'



const  TasksCompteur = ({nbTasks, nbTasksCompleted}) => {

    return (
        <View style={styles.container}>  
            <Counter  nb={nbTasks}  title={'Tâches Créées'}/>
            <Counter nb={nbTasksCompleted()}  title={'Tâches Complétées'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
 
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:15
      
    },

  
})

export default TasksCompteur;