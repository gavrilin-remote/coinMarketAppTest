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