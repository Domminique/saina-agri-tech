import { useState } from 'react'
import { FormRow, FormRowSelect } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { updateUser } from '../../features/user/userSlice'

const Mentees = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const {
    name,
    email,
    phonenumber,
    position,
    skills,
    experience,
    goals,
    gender,
    proximity,
    language,
    mentorLocation,
    proximityOptions,
    availability,

    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
  }

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Automatically upload meentes and match</h3>
        <p>
          Using a custom algorithm Ongata Rongai Online, will pair your mentors with mentees
          basing on profile information provided, this will help us customized
          the platform to help your organisation achieve the desired measurable
          results. uploads can be pdf, excell or json.
          <span>
            {' '}
            <br />
            <strong>Data format: </strong> for our matching algorithm to work
            properly with your mentees data have the following fields :{' '}
            <i>
              (a)country, (b)goals-what the mentee want to achieve,
              (c)skills-what does mentee wants to learn, (d)city/state,
              (e)gender, (f)proximity - do the mentee prefer it face-to-face or
              remote{' '}
            </i>
          </span>
        </p>
        <button className='btn ' disabled={isLoading}>
          {isLoading ? 'Please Wait...' : 'upload mentees'}
        </button>{' '}
        <button className='btn ' disabled={isLoading}>
          {isLoading ? 'Please Wait...' : 'View all mentees'}
        </button>
        <br />
        <p></p>
        <h3> Manually create and invite mentees</h3>
        <p>
          Form builder that will automatically send emails to the meentes
          inviting them to join the platform , Telling them more about your
          mentoring program.
        </p>
        <div className='form-center'>
          <FormRow
            type='text'
            labelText='Name'
            name='name'
            value={name}
            handleChange={handleJobInput}
          />
          {/* email */}
          <FormRow
            type='text'
            labelText='email'
            name='email'
            value={email}
            handleChange={handleJobInput}
          />
          {/* phonenumber */}
          <FormRow
            type='text'
            labelText='phone number'
            name='phonenumber'
            value={phonenumber}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            labelText='language'
            name='language'
            value={language}
            handleChange={handleJobInput}
          />
          {/* Skills */}
          <FormRow
            type='text'
            labelText='Skills'
            name='skills'
            value={skills}
            handleChange={handleJobInput}
          />
          {/* Experience */}
          <FormRow
            type='text'
            labelText=' Experience'
            name='experience'
            value={experience}
            handleChange={handleJobInput}
          />
          {/* Goals */}
          <FormRow
            type='text'
            labelText='Goals'
            name='goals'
            value={goals}
            handleChange={handleJobInput}
          />
          {/* Gender */}
          <FormRow
            type='text'
            labelText='Gender'
            name='gender'
            value={gender}
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            labelText='Availability (day & time)'
            name='availability'
            value={availability}
            handleChange={handleJobInput}
          />
          {/* MentorLocation */}
          <FormRow
            type='text'
            name='mentorLocation'
            labelText='location/city/state'
            value={mentorLocation}
            handleChange={handleJobInput}
          />
          {/* status */}
          <FormRowSelect
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />

          {/* status */}
          <FormRowSelect
            name='proximity'
            value={proximity}
            handleChange={handleJobInput}
            list={proximityOptions}
          />
          <button type='submit' className='btn btn-block' disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'Add Mentee'}
          </button>
        </div>
      </form>
    </Wrapper>
  )
}
export default Mentees
