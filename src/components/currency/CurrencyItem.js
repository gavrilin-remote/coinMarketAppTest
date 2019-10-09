import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import _ from 'lodash'
import {formatPercentage, formatPrice} from "../../helpers";

const renderQuote = ({market_cap, price, percent_change_1h, percent_change_24h, volume_24h, percent_change_7d}) => (
    <View style={styles.quote} key={_.uniqueId()}>
        <Text style={styles.title}>{'USD'}</Text>
        {renderKeyAndValue('Market Cap', formatPrice(market_cap))}
        {renderKeyAndValue('Price', formatPrice(price))}
        {renderKeyAndValue('volume(24h)', formatPrice(volume_24h))}
        {renderKeyAndValue('% 1h', formatPercentage(percent_change_1h))}
        {renderKeyAndValue('% 24h', formatPercentage(percent_change_24h))}
        {renderKeyAndValue('% 7d', formatPercentage(percent_change_7d))}
    </View>
);

const renderKeyAndValue = (key, value) => key && value
    ? (
    <Text key={_.uniqueId()} style={styles.title}>
        {key.toUpperCase()}: <Text style={styles.value}>{value}</Text>
    </Text>)
    : null;

const CurrencyItem = memo(({item}) =>(
        <View style={styles.itemView}>
            {renderKeyAndValue('name', item.name)}
            {renderKeyAndValue('symbol', item.symbol)}
            {item.quote.USD && renderQuote(item.quote.USD)}
            {renderKeyAndValue('circulating supply', item.circulating_supply)}
        </View>

))

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold'
    },
    value: {
        fontWeight: 'normal'
    },
    itemView: {
        paddingVertical: 10,
    },
    quote: {
        paddingHorizontal: 10
    }
});

export default CurrencyItem;