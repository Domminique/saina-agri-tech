import img1 from '../images/saina-garden.jpg'
import img2 from '../images/saina-irigation.jpg'

import img3 from '../images/saina-tractor.jpg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Smallholder farmers',
  headline:
    'Gain Knowledge through customized content',
  description:
    'Saina is an integrated smart farming platform that leverages Internet of Things (IoT) technology, data analytics, and mobile applications to empower farmers with real-time information and insights.',
  buttonLabel: 'Get started',
  imgStart: false,
  img: img1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Logistics support',
  headline: "Providing logistic support to the agribusinesses  and Smallholder farmers  ",
  description:
    'To ensure that their products are delivered to customers in a timely manner we provide support for logistics. This includes packaging and shipping support, as well as support with customs and duties',
  buttonLabel: 'Download App Now',
  imgStart: true,
  img: img3,
  alt: 'API integration',
  dark: false,
  primary: false,
  darkText: true,
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Training and Support ',
  headline: 'We provide training and support to  agribusinesses  and Smallholder farmers ',
  description:
    'To enable African agribusinesses and Smallholder farmers use the integrated platform effectivelly. This includes training on sustainable agribusiness, quality farming,progressive livestock farming, enhanced farming practises, product photography, pricing, marketing, and customer service.',
  buttonLabel: 'Download mobile app',
  imgStart: false,
  img: img2,
  alt: 'Mobile app',
  dark: false,
  primary: false,
  darkText: true,
}
