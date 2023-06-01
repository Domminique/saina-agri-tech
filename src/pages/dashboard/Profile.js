import { useState } from 'react'
import { FormRow } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateUser } from '../../features/user/userSlice'

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
    phonenumber: user?.phonenumber || '',
    country: user?.country || '',
    organisation: user?.organisation || '',

    demographics: user?.demographics || '',
    culture: user?.culture || '',
    orgType: user?.orgType || '',
    hopes: user?.hopes || '',
    dreams: user?.dreams || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const {
      name,
      email,
      lastName,
      location,
      phonenumber,
      organisation,
      demographics,
      culture,
      orgType,
      dreams,
      hopes,
    } = userData
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
        <h3>program profile</h3>
        <p>
          Tell us more about your mentoring program, this will help us
          customized the platform to help your organisation achieve the desired
          measurable results.
        </p>
        <div className='form-center'>
          <FormRow
            type='text'
            name='name'
            labelText='program manager'
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='organisation'
            value={userData.organisation}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='country'
            value={userData.country}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='language'
            name='lastName'
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='Phone Number'
            name='phonenumber'
            value={userData.phonenumber}
            handleChange={handleChange}
          />
          <FormRow
            type='email'
            name='email'
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            name='location'
            value={userData.location}
            handleChange={handleChange}
          />

          {/* <p>Why are you lauching a mentoring program?</p> */}

          <FormRow
            type='text'
            labelText='Why are you lauching a mentoring program? eg. Talent retention, ..'
            name='dreams'
            value={userData.dreams}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='What are you hoping your cohort will achieve? eg. more women in tech roles, ..'
            name='hopes'
            value={userData.hopes}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='Is your type of organisation corporate 0r not-for-profit?'
            name='orgType'
            value={userData.orgType}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='Is your  organisational culture formal or casual?'
            name='culture'
            value={userData.culture}
            handleChange={handleChange}
          />
          <FormRow
            type='text'
            labelText='What is your demographics target? eg over 40, mixed generation, ..'
            name='demographics'
            value={userData.demographics}
            handleChange={handleChange}
          />
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
      <br />
      <hr />
      <FormRow
        type='text'
        labelText='Match Ratio (mentor:mentee)'
        name=' Mentor: Mentee'
      />
      <br />
      <button className='btn ' disabled={isLoading}>
        {isLoading ? 'Please Wait...' : 'Match '}
      </button>{' '}
    </Wrapper>
  )
}
export default Profile
