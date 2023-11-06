import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ShowType } from '../types/showType';

type ShowState = {
  currentShow: ShowType,
  loading: boolean,
  error: string,
}

const initialState: ShowState = {
  currentShow: {} as ShowType,
  loading: false,
  error: '',
};

const currentShowSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<ShowType>) => {
      state.currentShow = action.payload;
    },
    close: (state) => {
      state.currentShow = {} as ShowType;
    },
  },
  extraReducers(builder) {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action: PayloadAction<ShowType>) => {
      state.currentShow = action.payload;
      state.loading = false;
    });
    builder.addCase(init.rejected, (state) => {
      state.error = 'Something went wrong';
    });
  }
});

export const { open, close } = currentShowSlice.actions;
export default currentShowSlice.reducer;

export const init = createAsyncThunk('current/fetch', () => {}); // add fetch
