import React, { useState } from 'react';
import { View, Text } from 'react-native';
import TasksList from './TasksList';
import TaskForm from './TaskForm';

export default function TasksContainer(props) {
    const [tasks, setTasks] = useState([
        { id: new Date().getTime(), title: 'nouvelle tache', completed: Boolean},
     
    ])

    const onAddTask = (title) => {

        const newTask = { 
            id: new Date().getTime(),
            title: title,
            completed: false
        }

        setTasks([newTask, ...tasks]);
    }


    const onTrashPress = (id) => {
        let newTasks = [];
        tasks.forEach(task => {
            if(task.id !== id) {
                newTasks.push(task);
            }
        })
      

        setTasks(newTasks);

    }

    const onChangeStatus = (id) => {
        let newTasks = [];
        
        tasks.forEach(task => {
            if(task.id === id){
                newTasks.push({ 
                    id: id,
                    title: task.title,
                    completed: !task.completed  
                });
            } else {
                newTasks.push(task)
                
            }
        });
    

        setTasks(newTasks);
    }

    return (
        <View>
            <TaskForm onAddTask={onAddTask} />

            <TasksList onTrashPress={onTrashPress} 
                       tasks={tasks} 
                       onChangeStatus={onChangeStatus}
                        />
        </View>
    )
}

