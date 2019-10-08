/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import CryptoCurrenciesContainer from './containers/CryptoCurrenciesContainer'

const store = configureStore();

const App: () => React$Node = () => {
    return (
        <Provider store={store}>
            <CryptoCurrenciesContainer/>
        </Provider>
    );
};

export default App;
