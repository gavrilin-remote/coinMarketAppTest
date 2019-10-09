import _ from 'lodash'

export const parseResponse = (response) => {
    let result = {};
    if (response && _.isObject(response)) {
        if (response.status === 200) {
            result = _.get(response, 'data', {})
        } else if (response.status >= 400) {
            result = {
                status: _.get(response, 'data.status.error_code', ''),
                msg: _.get(response, 'data.status.error_message', '')
            }
        }
    }
    return result
};

export const formatPrice = (number) => number && !isNaN(number)
    ? `$ ${(number).toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    : number;

export const formatPercentage = (float) => parseFloat(float).toFixed(2) + "%"