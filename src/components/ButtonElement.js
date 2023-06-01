import styled from 'styled-components'

//import { Link } from 'react-scroll'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#000' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? ' 14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#00aa13' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none !important;

  // &:hover {
  //   transition: all 0.2s ease-in-out;
  //   background: #fff;
  //   color: #010606;
  // }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#fff' : '#00aa13')};
  }
`
