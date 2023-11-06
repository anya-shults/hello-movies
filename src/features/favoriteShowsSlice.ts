import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ShowType } from '../types/showType';

type ShowState = {
  shows: ShowType[],
  loading: boolean,
  error: string,
}

const initialState: ShowState = {
  shows: [],
  loading: false,
  error: '',
};

const favoriteShowsSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ShowType>) => {
      state.shows.push(action.payload);
    },
    remove: (state, action: PayloadAction<ShowType>) => {
      state.shows = state.shows.filter(show => show !== action.payload);
    },
    clear: (state) => {
      state.shows = [] as ShowType[];
    }
  },
  extraReducers(builder) {
    builder.addCase(init.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(init.fulfilled, (state, action: PayloadAction<ShowType[]>) => {
      state.shows = action.payload;
      state.loading = false;
    });
    builder.addCase(init.rejected, (state) => {
      state.error = 'Someting goes wrong';
      state.loading = false;
    });
  },
});

export const { add, clear, remove } = favoriteShowsSlice.actions;
export default favoriteShowsSlice.reducer;

export const init = createAsyncThunk('favorite/fetch', () => []); //add fetch
