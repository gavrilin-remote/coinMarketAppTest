import React, {memo} from 'react';
import {ActivityIndicator, View, Dimensions, StyleSheet} from 'react-native'

const {width, height} = Dimensions.get('window');
const Loader = memo(() => (
    <View style={styles.loaderWrapper}>
        <ActivityIndicator/>
    </View>
));

const styles = StyleSheet.create({
    loaderWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
    }
});
export default Loader;