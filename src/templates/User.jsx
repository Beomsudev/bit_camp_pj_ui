import React from 'react'
import { UserMenu } from '../components'
import './table.style.css'

const User = ({children}) => (<>
  <h1> 유저 </h1>
  <UserMenu/>
  {children}
</>)

export default User