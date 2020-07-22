import React, { useState } from 'react';
import { FlatList } from 'react-native';
import TaskTile from './TaskTile';





const TasksList = ({ tasks, onChangeStatus, onTrashPress})  =>  {

    const _renderItem = ({ item }) => (
         <TaskTile id={item.id}
                    title={item.title} 
                    completed={item.completed} 
                    onChangeStatus={onChangeStatus} 
                    onTrashPress={onTrashPress} 
                    />  
    );

  


    return (
       
            <FlatList
                data={tasks}
                renderItem={ _renderItem }
                keyExtractor={item => item.id}
            />
  
    )
}

export default TasksList;