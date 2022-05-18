import axios from 'axios';
import 'react-native-gesture-handler';

import {configureStore, createReducer, createAction} from '@reduxjs/toolkit';
const initialState = {
  data: [],
};
export const getDataAsync = () => async dispatch => {
  try {
    const response = await axios.get(
      `https://fervce-json.herokuapp.com/users`,
    );
    dispatch(getData(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const getData = createAction('people/search');
export const getReducer = createReducer(initialState, builder => {
  builder
    .addCase(getData, (state, action) => {
      state.data = action.payload;
    })
});

export const store = configureStore({
  reducer: getReducer,
});