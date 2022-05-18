/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react'
import App from './App';
import {store} from './src/redux/redux';
import {Provider} from 'react-redux';
const ReduxProvider = () => {
    return(
        <Provider store={store}>
            <App />
        </Provider>
    )
}
AppRegistry.registerComponent('aplicacionNative', () => ReduxProvider
);
