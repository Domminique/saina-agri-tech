import main from '../components/images/saina-seedling.jpg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
import InfoSection from '../components/InfoSection'
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/InfoSection/Data'
import QandA from '../components/QandA'
import ReviewsComponent from '../components/ReviewsComponent'

const Landing = () => {
  return (
    <>
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
            Integrated   <span>smart farming </span> platform
            </h1>
            <p>
            Saina empowers farmers with real-time information on weather conditions, soil moisture levels, crop health, and market prices, enabling them to make informed decisions and improve their overall yields
            </p>

            <h5>Ready to get empowered with real-time information and insights?</h5>
            {/* <Link 
            to='https://play.google.com/store/apps/details?id=com.imbuga.ongatarongaionline' 
            href="https://play.google.com/store/apps/details?id=com.imbuga.ongatarongaionline" 
            className='btn btn-hero'>
              
              Get Started
            </Link> */}
              <Link 
            to='/register' 
           
            className='btn btn-hero'>
              
              Get Started
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
      <InfoSection {...homeObjOne} />
      <br />
      <br />
      <QandA />
      <br />
      <InfoSection {...homeObjTwo} />
      {/* Reviwws */}

      <ReviewsComponent />
      <InfoSection {...homeObjThree} />
    </>
  )
}

export default Landing
