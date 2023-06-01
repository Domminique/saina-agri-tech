import axios from 'axios'
import { clearStore } from '../features/user/userSlice'

const customFetch = axios.create({
  baseURL: 'http://localhost:80/api/v1',
})

customFetch.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`
  }
  return config
})

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore())
    return thunkAPI.rejectWithValue('Unauthorized! Logging Out...')
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customFetch
