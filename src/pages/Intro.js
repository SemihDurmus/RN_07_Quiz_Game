import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

import {CategorySelectModal} from '../components';

import {introPage} from './styles';

const Intro = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={introPage.container}>
          <Text style={introPage.bannerText}>TRIVIA</Text>
        </View>
        <View style={introPage.container}>
          <TouchableOpacity style={introPage.buttonContainer}>
            <Text style={introPage.buttonText}>Start</Text>
          </TouchableOpacity>
        </View>

        <CategorySelectModal />
      </View>
    </SafeAreaView>
  );
};

export {Intro};
