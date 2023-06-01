import { FormRow, FormRowSelect } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../features/job/jobSlice'
import { useEffect } from 'react'
const AddJob = () => {
  const {
    isLoading,
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
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !email || !phonenumber) {
      toast.error('Please fill out all fieldins')
      return
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            company,
            jobLocation,
            jobType,
            status,
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
          },
        })
      )
      return
    }

    console.log(
      company,
      jobLocation,
      jobType,
      status,
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
      availability
    )

    dispatch(
      createJob({
        position,
        company,
        jobLocation,
        jobType,
        status,
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
      })
    )
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleChange({
          name: 'jobLocation',
          value: user.location,
        })
      )
    }
  }, [])

  return (
    <Wrapper>
      <h3>Automatically upload mentors and match with mentees</h3>
      <p>
        Using a custom algorithm Ongata Rongai Online, will pair your mentors with mentees
        basing on profile information provided, uploads formats, excell or json.
      </p>
      <button className='btn ' disabled={isLoading}>
        {isLoading ? 'Please Wait...' : 'upload mentors'}
      </button>{' '}
      <FormRow type='file' />
      <br />
      <br />
      <form className='form'>
        <h3>{isEditing ? 'Manage mentor' : 'add mentor'}</h3>
        <div className='form-center'>
          {/*  name, */}
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

          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
      <br />
      <br />
    </Wrapper>
  )
}
export default AddJob
