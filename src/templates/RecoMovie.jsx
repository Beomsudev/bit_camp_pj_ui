import React from 'react'
import {RecoMovieMenu as Menu} from '../components'
import './table.style.css'

const RecoMovie = ({children}) => (<>
    <h1>RecoMovie</h1>
    <Menu/>
    {children}
</>)

export default RecoMovie


