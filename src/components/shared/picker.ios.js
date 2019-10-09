import React, {memo} from 'react';
import {ActionSheetIOS, StyleSheet, Text, TouchableOpacity} from 'react-native'

const openActionSheet = (data, name, onChange) => {
    ActionSheetIOS.showActionSheetWithOptions({
            options: ['Cancel', ...data],
            cancelButtonIndex: 0,
        },
        (buttonIndex) => {
            if (buttonIndex !== 0) {
                onChange(name, data[buttonIndex - 1])
            }
        },)
};

const SharedPicker = memo(({data, name, currentValue, onChange}) => (
    <TouchableOpacity style={styles.button} onPress={() => openActionSheet(data, name, onChange)}>
        <Text>{currentValue}</Text>
    </TouchableOpacity>
));

const styles = StyleSheet.create({
    button:{
        width: '100%',
        height: 40,
        paddingVertical: 5
    }
});

export default SharedPicker;