import {
    GET_CRYPTOCURRENCIES_REQUEST,
    GET_CRYPTOCURRENCIES_SUCCESS,
    GET_CRYPTOCURRENCIES_FAIL,
    CURRENCY_SET_PARAMS,
    CURRENCY_REFRESH,
} from "../constants";
import api from '../helpers/apiClient'
import {parseResponse} from "../helpers";

const currencyRequestStart = () => ({
    type: GET_CRYPTOCURRENCIES_REQUEST
});

const currencyRequestSuccess = (payload = {}) => ({
    type: GET_CRYPTOCURRENCIES_SUCCESS,
    payload
});

const currencyRequestFail = (error) => ({
    type: GET_CRYPTOCURRENCIES_FAIL,
    payload: error
});

const currencyRefresh = () => ({
    type: CURRENCY_REFRESH
});

export const getCurrencies = () => async (dispatch, getState) => {
    const {currencies: {currency_requesting}} = getState();
    if (currency_requesting) {
        return
    }

    dispatch(currencyRequestStart());
    try {
        const query = getCurrenciesQuery(getState());
        const response = await api.get(`/v1/cryptocurrency/listings/latest?${query}`);
        const {data} = parseResponse(response);
        dispatch(currencyRequestSuccess(data))
    } catch (err) {
        const error = parseResponse(err.response);
        dispatch(currencyRequestFail(error))
    }
};

const getCurrenciesQuery = ({
                                currencies: {
                                    start,
                                    limit,
                                    volume_24h_min,
                                    convert,
                                    convert_id,
                                    sort,
                                    sort_dir,
                                    cryptocurrency_type,
                                    aux,
                                }
                            }) => {
    const params = {
        start,
        limit,
        volume_24h_min,
        convert,
        convert_id,
        sort,
        sort_dir,
        cryptocurrency_type,
        aux,
    };
    return Object.keys(params).filter(key => params[key]).map(key => `${key}=${params[key]}`).join('&')
};

export const currencySetParams = (key, value) => async (dispatch) => {
    if (!key || !value) {
        return
    }
    dispatch({
        type: CURRENCY_SET_PARAMS,
        payload: {
            key,
            value
        }
    });
};

export const currencyRefreshAction = () => async (dispatch) => dispatch(currencyRefresh());