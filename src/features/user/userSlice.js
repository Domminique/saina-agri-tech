import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import {
  addUserToLocalStorage,
  removeUserFromLocalStorage,
  getUserFromLocalStorage,
} from '../../utils/localStorage'
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
  clearStoreThunk,
} from './userThunk'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')
const location = localStorage.getItem('location')

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  // user: user ? JSON.parse(user) : null,
  user: getUserFromLocalStorage(),
  location: location || '',
  token: token,
}

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkAPI) => {
    return registerUserThunk('/auth/register', user, thunkAPI)
  }
)

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkAPI) => {
    return loginUserThunk('/auth/login', user, thunkAPI)
  }
)

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    return updateUserThunk('/auth/updateUser', user, thunkAPI)
  }
)
export const clearStore = createAsyncThunk('user/clearStore', clearStoreThunk)
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    logoutUser: (state, { payload }) => {
      state.user = null
      state.token = null
      state.isSidebarOpen = false
      removeUserFromLocalStorage()
      if (payload) {
        toast.success(payload)
      }
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user, token, location } = payload
      state.isLoading = false
      state.user = user
      state.token = token
      state.location = location
      addUserToLocalStorage({ user, token, location })
      toast.success(`Hello There ${user.name}`)
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user, token, location } = payload
      state.isLoading = false
      state.user = user
      state.token = token
      state.location = location
      addUserToLocalStorage({ user, token, location })
      toast.success(`Welcome Back ${user.name}`)
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user, token, location } = payload
      state.isLoading = false
      state.user = user
      state.token = token
      state.location = location
      addUserToLocalStorage({ user, token, location })
      toast.success(`User Updated!`)
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [clearStore.rejected]: () => {
      toast.error('There was an error..')
    },
  },
})

export const { toggleSidebar, logoutUser } = userSlice.actions
export default userSlice.reducer
