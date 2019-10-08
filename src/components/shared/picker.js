import React, {memo} from 'react';
import {Picker} from 'react-native'
import _ from 'lodash'

const SharedPicker = memo(({data, name, currentValue, onChange}) => (
    <Picker
        selectedValue={currentValue}
        onValueChange={(value) => onChange(name, value)}
    >
        {data.map(value => (
            <Picker.Item
                key={_.uniqueId()}
                label={value}
                value={value}
            />
        ))}
    </Picker>
));

export default SharedPicker;