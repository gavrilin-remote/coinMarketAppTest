export const GET_CRYPTOCURRENCIES_REQUEST = 'GET_CRYPTOCURRENCIES_REQUEST';
export const GET_CRYPTOCURRENCIES_SUCCESS = 'GET_CRYPTOCURRENCIES_SUCCESS';
export const GET_CRYPTOCURRENCIES_FAIL = 'GET_CRYPTOCURRENCIES_FAIL';

export const CURRENCY_SET_PARAMS = 'CURRENCY_SET_PARAMS';
export const CURRENCY_REFRESH = 'CURRENCY_REFRESH';

export const SORT_FIELDS = {
    name: "name",
    symbol: "symbol",
    date_added: "date_added",
    market_cap: "market_cap",
    market_cap_strict: "market_cap_strict",
    price: "price",
    circulating_supply: "circulating_supply",
    total_supply: "total_supply",
    max_supply: "max_supply",
    num_market_pairs: "num_market_pairs",
    volume_24h: "volume_24h",
    percent_change_1h: "percent_change_1h",
    percent_change_24h: "percent_change_24h",
    percent_change_7d: "percent_change_7d",
    market_cap_by_total_supply_strict: "market_cap_by_total_supply_strict",
    volume_7d: "volume_7d",
    volume_30d: "volume_30d"
};
export const SORT_DIRECTIONS = {
    asc: "asc",
    desc: "desc"
};
export const CRYPTOCURRENCY_TYPE = {
    all:"all",
    coins: "coins",
    tokens: "tokens"
};