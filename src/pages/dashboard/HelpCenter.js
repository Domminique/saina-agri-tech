import { useState } from 'react'
import { FormRow } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateUser } from '../../features/user/userSlice'

const HelpCenter = () => {
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
      <form className='form' onSubmit={handleSubmit}>
        <h3>Help Center</h3>
        <button className='btn ' disabled={isLoading}>
          {isLoading ? 'Please Wait...' : 'upload mentees'}
        </button>{' '}
        <button className='btn ' disabled={isLoading}>
          {isLoading ? 'Please Wait...' : 'View all mentees'}
        </button>
        <br />
        <p></p>
        <p> create a ticket and our team will spring in action to help you</p>
        <div className='form-center'>
          {/* <p>Why are you lauching a mentoring program?</p> */}

          <FormRow
            type='text'
            labelText='What help can we offer you?'
            name='orgType'
            value={userData.orgType}
            handleChange={handleChange}
          />
          {/* <FormRow
            type='text'
            labelText='Is your  organisational culture formal or casual?'
            name='culture'
            value={userData.culture}
            handleChange={handleChange}
          /> */}

          <button type='submit' className='btn btn-block' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'submit'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
export default HelpCenter
