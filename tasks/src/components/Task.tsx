import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import moment from 'moment';
import 'moment/locale/pt-br';

import commonStyles from '../commonStyles';

interface TaskProps {
  id: number;
  desc: string;
  estimateAt: Date;
  doneAt: Date | null;
  onToggleTask: any;
  onDelete?: any;
}

const Task: React.FC<TaskProps> = ({ id, desc, estimateAt, doneAt, onToggleTask, onDelete }) => {
  const date = doneAt ? doneAt : estimateAt;
  const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM');

  const getRightContent = () => {
    return (
      <TouchableOpacity style={styles.right} onPress={() => onDelete && onDelete(id)}>
        <FontAwesome name="trash" size={30} color="#FFF" />
      </TouchableOpacity>
    );
  };

  const getLeftContent = () => {
    return (
      <TouchableOpacity style={styles.left}>
        <FontAwesome name="trash" size={20} color="#FFF" style={styles.excludeIcon} />
        <Text style={styles.excludeText}>Excluir</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      renderRightActions={getRightContent}
      renderLeftActions={getLeftContent}
      onSwipeableLeftOpen={() => onDelete && onDelete(id)}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => onToggleTask(id)}>
          <View style={styles.checkContainer}>{getCheckView(doneAt)}</View>
        </TouchableWithoutFeedback>
        <View>
          <Text style={[styles.desc, doneAt !== null ? styles.doneTask : null]}>{desc}</Text>
          <Text style={styles.date}>{formattedDate}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

function getCheckView(doneAt: Date | null) {
  if (doneAt !== null) {
    return (
      <View style={styles.done}>
        <FontAwesome name="check" size={20} color="#FFF" />
      </View>
    );
  } else {
    return <View style={styles.pending}></View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#AAA',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },

  checkContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#555',
  },

  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: '#4D7031',
    alignItems: 'center',
    justifyContent: 'center',
  },

  desc: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 15,
  },

  doneTask: {
    textDecorationLine: 'line-through',
  },

  date: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 12,
  },

  right: {
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },

  left: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
  },

  excludeText: {
    fontFamily: commonStyles.fontFamily,
    color: '#FFF',
    fontSize: 20,
    margin: 10,
  },

  excludeIcon: {
    marginLeft: 10,
  },
});

export default Task;
