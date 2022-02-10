import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/colors';
import { FONT_SIZE_MEDIUM } from '../constants/fontsize';



const DropdownComponent = (props) => {
  const {search,placeholder,data} =props;
  const [value, setValue] = useState(null);

  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search={search}
      maxHeight={200}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        setValue(item.value);
      }}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    marginVertical: 10,
    height: 60,
    backgroundColor:Colors.WHITE,
    padding:10,
    borderWidth:0.5,
    borderColor:Colors.GREEN_SECONDARY,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: FONT_SIZE_MEDIUM,
    textTransform:'uppercase',
    fontWeight:'500'
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});