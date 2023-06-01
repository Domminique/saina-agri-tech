export const addUserToLocalStorage = ({ user, token, location }) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
  localStorage.setItem('location', location)
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  localStorage.removeItem('location')
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}
