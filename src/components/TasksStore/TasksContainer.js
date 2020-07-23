import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TasksList from './TasksList';
import TaskForm from './TaskForm';
import TasksCompteur from './TasksCompteur';
import FloatingButton from '../_Shared/FloatingButton/index'

import { useSelector } from 'react-redux';
import { getTasks } from '../../redux/selectors';

export default function TasksContainer(props) {
  
    const tasks = useSelector(getTasks);
   

    const [isFormOpened, setIsFormOpened] = useState(false)

 

    const onTrashPress = (id) => {
  
    }



    const getTasksCompleted = () => {

        let counters = 0

        tasks.forEach(task => {
            if(task.completed){
                counters++;
            }
        })
        return counters
    }

    const onPressFloatingBtn = () => {
        setIsFormOpened(!isFormOpened)
    }

    return (
        <View style={styles.container}>
            <TasksCompteur
                nbTasks={tasks.length}
                nbTasksCompleted={() => getTasksCompleted()}
            />


            {isFormOpened &&  <TaskForm  />}

            <TasksList onTrashPress={onTrashPress} 
                       tasks={tasks} 
                      
                        />

            <FloatingButton 
                onPressFloatingBtn={ () => onPressFloatingBtn()  }
                isFormOpened={isFormOpened}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
       
        flex:1,
        position: 'relative'
    }
})
