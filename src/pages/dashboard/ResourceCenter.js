import { useState } from 'react'
import { FormRow } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateUser } from '../../features/user/userSlice'

const ResourceCenter = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
    phonenumber: user?.phonenumber || '',
    organisation: user?.organisation || '',
    country: user?.country || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, lastName, location, phonenumber } = userData
    if (!name || !email || !lastName || !location || !phonenumber) {
      toast.error('please fill out all fields')
      return
    }
    dispatch(updateUser(userData))
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({ ...userData, [name]: value })
  }

  return (
    <Wrapper>
      <h3> Resource Center</h3>
    </Wrapper>
  )
}
export default ResourceCenter
