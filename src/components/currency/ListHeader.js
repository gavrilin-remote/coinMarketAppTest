import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import SharedPicker from '../shared/picker'
import {SORT_FIELDS, SORT_DIRECTIONS, CRYPTOCURRENCY_TYPE} from "../../constants";
import {currencySetParams, getCurrencies, currencyRefreshAction} from'../../actions/currencyActions'
import _ from 'lodash'

class ListHeader extends Component {
    constructor(props) {
        super(props)
    }

    changeParam = async (key, value) =>{
        const {currencySetParams} = this.props;
        await currencySetParams(key, value);
        this.refreshListWithDebounce()
    };

    refreshList = async () =>{
        const {currencyRefreshAction, getCurrencies} = this.props;
        await currencyRefreshAction();
        await getCurrencies();
    };

    refreshListWithDebounce = _.debounce(this.refreshList, 500);

    render() {
        const {sort, sort_dir, cryptocurrency_type} = this.props;
        return (
            <View style={styles.headerView}>
                <Text style={styles.title}>Sort by:</Text>
                <SharedPicker
                    name={'sort'}
                    onChange={this.changeParam}
                    currentValue={sort}
                    data={Object.values(SORT_FIELDS)}
                />
                <Text style={styles.title}>Sort direction:</Text>
                <SharedPicker
                    name={'sort_dir'}
                    onChange={this.changeParam}
                    currentValue={sort_dir}
                    data={Object.values(SORT_DIRECTIONS)}
                />
                <Text style={styles.title}>Cryptocurrency type:</Text>
                <SharedPicker
                    name={'cryptocurrency_type'}
                    onChange={this.changeParam}
                    currentValue={cryptocurrency_type}
                    data={Object.values(CRYPTOCURRENCY_TYPE)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerView:{
        paddingVertical: 10
    },
    title:{
        textTransform: 'uppercase',
        fontWeight:'bold'
    }
});

const mapStateToProps = ({
                       currencies: {
                           sort,
                           sort_dir,
                           cryptocurrency_type
                       }
                   }) => ({ sort, sort_dir, cryptocurrency_type });

export default connect(mapStateToProps, {currencySetParams, getCurrencies, currencyRefreshAction})(ListHeader);