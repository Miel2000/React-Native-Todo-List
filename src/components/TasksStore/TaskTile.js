import React  from 'react';

import {useDispatch} from 'react-redux';

import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {toggleTask} from '../../redux/actions';


const TaskTile = ({ id, title, completed, onTrashPress}) => {

    const dispatch = useDispatch()

    return (
      <TouchableOpacity onPress={() => dispatch(toggleTask(id))}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Image
              style={styles.icon}
              source={
                completed
                  ? require("../../../assets/img/round_checked.png")
                  : require("../../../assets/img/round_unchecked.png")
              }
            />
            <Text
              style={
                (styles.title, { color: completed ? "lightgrey" : "black" })
              }
            >
              {title}
            </Text>
          </View>

          <TouchableOpacity onPress={() => onTrashPress(id)}>
            <Image
              style={styles.icon}
              source={require("../../../assets/img/trash.png")}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
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