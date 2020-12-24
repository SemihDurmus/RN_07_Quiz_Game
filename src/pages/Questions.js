import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Animated,
  Button,
} from 'react-native';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
//import {QuestionItem} from '../components';
import {useSelector, useDispatch} from 'react-redux';

const Questions = (props) => {
  const questionList = useSelector((global) => global.questions);
  console.log(questionList);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>QUESTIONS</Text>
        {/* <FlatList
          horizontal
          scrollEnabled={false}
          keyExtractor={(_, i) => i.toString()}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export {Questions};
