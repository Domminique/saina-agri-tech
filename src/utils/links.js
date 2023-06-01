import { IoBarChartSharp } from 'react-icons/io5'
import { MdQueryStats } from 'react-icons/md'
import { MdNotificationsActive } from 'react-icons/md'
import { MdOutlineReduceCapacity } from 'react-icons/md'
import { MdOutlineSchool } from 'react-icons/md'

import { MdContactSupport } from 'react-icons/md'
import { MdSpaceDashboard } from 'react-icons/md'

import { FaWpforms } from 'react-icons/fa'
import { ImProfile } from 'react-icons/im'

const links = [
  { id: 1, text: 'stats', path: '/', icon: <IoBarChartSharp /> },
  { id: 5, text: 'program', path: 'profile', icon: <MdOutlineSchool /> },
  {
    id: 2,
    text: 'Notifications',
    path: 'notifications',
    icon: <MdNotificationsActive />,
  },
  { id: 8, text: 'all mentors', path: 'all-jobs', icon: <MdQueryStats /> },

  { id: 3, text: 'add mentor', path: 'add-job', icon: <FaWpforms /> },
  {
    id: 4,
    text: 'upload mentees',
    path: 'mentees',
    icon: <MdOutlineReduceCapacity />,
  },

  {
    id: 6,
    text: 'resource center',
    path: 'resource-center',
    icon: <MdSpaceDashboard />,
  },
  {
    id: 7,
    text: 'help center',
    path: 'help-center',
    icon: <MdContactSupport />,
  },
]

export default links
