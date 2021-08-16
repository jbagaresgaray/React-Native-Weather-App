import {createSlice, createSelector} from '@reduxjs/toolkit';
import {fetchCountries} from './middlewares';

const initialState = {
  isLoadingCapital: false,
  capitals: [],
  error: null,
};

const {actions, reducer} = createSlice({
  name: 'collections',
  initialState,
  extraReducers(builder) {
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoadingCapital = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, {payload}) => {
      state.isLoadingCapital = false;
      state.capitals = payload;
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.isLoadingCapital = false;
      state.error = action.error;
    });
  },
});

const selectRoot = (state) => state.app;
export const appSelectors = {
  capitals: createSelector(selectRoot, (state) => state.capitals),
  isLoadingCapital: createSelector(
    selectRoot,
    (state) => state.isLoadingCapital,
  ),
};

export const appActions = {
  ...actions,
  fetchCountries,
};
export const appReducer = reducer;
