import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import _ from 'lodash'

const renderQuote = (quotes) =>
    Object.entries(quotes).map(([key, value]) => (
        <View style={styles.quote} key={_.uniqueId()}>
            <Text style={styles.title}>{key}</Text>
            {Object.entries(value).map(([k, v]) => renderKeyAndValue(k, v))}
        </View>
    ));

const renderPlatform = (platform) => (
    <View key={_.uniqueId()} style={{paddingHorizontal: 10}}>
        <Text style={styles.title}>Platform</Text>
        {Object.entries(platform).map(([k, v]) => renderKeyAndValue(k, v))}
    </View>
);

const renderKeyAndValue = (key, value) => (
    <Text key={_.uniqueId()} style={styles.title}>
        {key.toUpperCase()}: <Text style={styles.value}>{value}</Text>
    </Text>);

const CurrencyItem = memo(({item}) =>
    (
        <View style={styles.itemView}>
            {Object.entries(item).map(([key, value]) => {
                    if (key === 'quote' && !_.isEmpty(value)) {
                        return renderQuote(value)
                    }
                    if (key === 'platform') {
                        if (!_.isEmpty(value)) {
                            return renderPlatform(value)
                        } else {
                            return null
                        }
                    }
                    if (key === 'tags') {
                        if (value.length) {
                            return renderKeyAndValue(key, value.join(', '))
                        } else {
                            return null
                        }
                    }
                    return renderKeyAndValue(key, value)
                }
            )}
        </View>
    )
);

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold'
    },
    value:{
        fontWeight: 'normal'
    },
    itemView:{
        paddingVertical: 10,
    },
    quote:{
        paddingHorizontal: 10
    }
});

export default CurrencyItem;