import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modal';

import {categoryModal} from './styles';

const CategorySelectModal = (props) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await Axios.get('https://opentdb.com/api_category.php');
    console.log(data);
  };

  return (
    <Modal
      isVisible={props.visibility}
      style={CategorySelectModal.modal}
      onBackdropPress={props.onClose}>
      <View style={categoryModal.container}>
        {/* <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={categoryList}
          renderItem={({item, i}) => (
            <TouchableOpacity
              style={categoryModal.categoryItemContainer}
              onPress={() => props.onCategorySelect(item)}>
              <Text style={categoryModal.categoryItemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        /> */}
      </View>
    </Modal>
  );
};

export {CategorySelectModal};
