import {
    GET_CRYPTOCURRENCIES_REQUEST,
    GET_CRYPTOCURRENCIES_SUCCESS,
    GET_CRYPTOCURRENCIES_FAIL,
    CURRENCY_SET_PARAMS,
    CURRENCY_REFRESH,
    SORT_FIELDS,
    SORT_DIRECTIONS, CRYPTOCURRENCY_TYPE
} from "../constants";

type Quote = {
    price: number,
    volume_24h: number,
    percent_change_1h: number,
    percent_change_24h: number,
    percent_change_7d: number,
    market_cap: number,
    last_updated: string
}

type Currency = {
    id: number,
    name: string,
    symbol: string,
    slug: string,
    cmc_rank: number,
    num_market_pairs: number,
    circulating_supply: number,
    total_supply: number,
    max_supply: number,
    last_updated: string,
    date_added: string,
    tags: Array<?string>,
    platform: string,
    quotes: {
        $key: Quote,
    }
}

type State = {
    start: number,
    limit: number,
    volume_24h_min: number,
    convert: string,
    convert_id: string,
    sort: string,
    sort_dir: string,
    cryptocurrency_type: string,
    aux: string,

    currencies: Array<?Currency>,
    currency_requesting: boolean,
    currency_error: {
        status: number,
        msg: string
    },
}

const initialState: State = {
    start: 1,
    limit: 20,
    volume_24h_min: null,
    convert: null,
    convert_id: null,
    sort: SORT_FIELDS.market_cap,
    sort_dir: SORT_DIRECTIONS.asc,
    cryptocurrency_type: CRYPTOCURRENCY_TYPE.all,
    aux: null,

    currencies: [],
    currency_requesting: false,
    currency_error: null,
};

export default (state = initialState, {type, payload = {}}) => {
    switch (type) {
        case GET_CRYPTOCURRENCIES_REQUEST: {
            return {
                ...state,
                currency_requesting: true
            }
        }
        case GET_CRYPTOCURRENCIES_SUCCESS: {
            return {
                ...state,
                currencies: [...state.currencies, ...payload],
                start: state.start + payload.length,
                currency_requesting: false
            }
        }
        case GET_CRYPTOCURRENCIES_FAIL: {
            return {
                ...state,
                currency_error: payload,
                currency_requesting: false
            }
        }
        case CURRENCY_SET_PARAMS: {
            return {
                ...state,
                [payload.key]: payload.value
            }
        }
        case CURRENCY_REFRESH: {
            return {
                ...state,
                start: initialState.start,
                currencies: initialState.currencies
            }
        }
        default:
            return state
    }
}