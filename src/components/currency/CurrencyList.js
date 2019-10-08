import React, {memo} from 'react';
import {FlatList, StyleSheet, View} from 'react-native'
import CurrencyItem from "./CurrencyItem";
import ListHeader from "./ListHeader";

const keyExtractor = (item) => item.id.toString();

const renderItem = (props) => <CurrencyItem {...props}/>;

const renderHeader = () => <ListHeader/>;

const renderItemSeparator = () => <View style={styles.separator} />;

const CurrencyList = memo(({data, onEndReached, onRefresh}) => (
        <FlatList
            style={styles.flatList}
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            ListHeaderComponent={renderHeader}
            ItemSeparatorComponent={renderItemSeparator}
            onEndReachedThreshold={0.5}
            onEndReached={onEndReached}
            onRefresh={onRefresh}
            refreshing={false}
        />
    )
);

const styles = StyleSheet.create({
    flatList: {
        paddingHorizontal: 20,
        paddingVertical: 25
    },
    separator:{
        borderBottomWidth:1,
    }
});

export default CurrencyList;