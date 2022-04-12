import { createSlice } from '@reduxjs/toolkit'

export const AppSlice = createSlice({
   name: 'app',
   initialState: {
      genres: [],
      results: [],
      loading: true,
      discoverType: 'movie',
   },
   reducers: {
      setAppLoaded: (state) => {
         state.loading = false
      },
      setGenres: (state, action) => {
         state.genres = action.payload
      },
      setResults: (state, action) => {
         state.results = action.payload
      },
      setDiscoverType: (state, action) => {
         state.discoverType = action.payload
      }
   },
})

// Action creators are generated for each case reducer function
export const { setGenres, setResults, setAppLoaded, setDiscoverType } = AppSlice.actions

export default AppSlice.reducer