import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  suppliers: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const {} = userSlice.actions
export default userSlice.reducer
