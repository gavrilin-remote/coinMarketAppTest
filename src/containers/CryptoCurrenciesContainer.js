import React, {Component} from 'react';
import {View, Alert} from 'react-native'
import {connect} from 'react-redux'
import {getCurrencies, currencyRefreshAction} from "../actions/currencyActions";
import Loader from "../components/shared/loader";
import CurrencyList from '../components/currency/CurrencyList'

class CryptoCurrenciesContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCurrencies()
    }

    componentDidUpdate(prevProps) {
        if(prevProps.currency_requesting && !this.props.currency_requesting){
            if(this.props.currency_error){
                const {msg, status} = this.props.currency_error;
                Alert.alert('Error', `Code ${status}\n message: ${msg}`)
            }
        }
    }

    refreshList = async () =>{
        const {currencyRefreshAction, getCurrencies} = this.props;
        await currencyRefreshAction();
        await getCurrencies();
    };

    render() {
        const {currency_requesting, currencies, getCurrencies} = this.props;
        return (
            <View>
                {currency_requesting && <Loader/>}
                <CurrencyList
                    onRefresh={this.refreshList}
                    onEndReached={getCurrencies}
                    data={currencies}
                />
            </View>
        );
    }
}

const mapStateToProps =
    ({
         currencies: {
             currencies,
             currency_requesting,
             currency_error
         }
     }) => ({
        currencies,
        currency_requesting,
        currency_error
    });

export default connect(mapStateToProps, {currencyRefreshAction, getCurrencies})(CryptoCurrenciesContainer);
