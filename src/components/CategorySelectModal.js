import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {categoryModal} from './styles';

const CategorySelectModal = (props) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const renderCategories = ({item}) => (
    <TouchableOpacity
      style={categoryModal.categoryItemContainer}
      onPress={() => props.onCategorySelect(item)}>
      <Icon name="hexagon" color="white" size={28} />
      <Text style={categoryModal.categoryItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const fetchData = async () => {
    const {
      data: {trivia_categories},
    } = await Axios.get('https://opentdb.com/api_category.php');
    setCategoryList(trivia_categories);
  };

  return (
    <Modal
      isVisible={props.visibility}
      style={CategorySelectModal.modal}
      onBackdropPress={props.onClose}>
      <View style={categoryModal.container}>
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={categoryList}
          renderItem={renderCategories}
        />
      </View>
    </Modal>
  );
};

export {CategorySelectModal};
