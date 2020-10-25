import React from 'react'
import './table.style.css'
import './home.style.css'

import {ItemChatBot} from "../container/item"
import axios from 'axios'
import { ImageBackground } from "react-native"
import homeimg from './images/tenet2.jpg';

export default function Home(props){ 
    const test = () => {
        axios.get(`http://localhost:8080/api`)
            .then(res => {
                alert(`Connection Success !!`)
            }
                
            ).catch(
                e => alert(`Failure`)
            )
    }
    return(<>
           <table className='tab_layer'><tr><td><h1>Home</h1></td></tr>
            <tr><td><button onClick={test}>Connection Test</button></td></tr></table>
            <ImageBackground  src={ homeimg } width='1800' height='1000' />

            <ItemChatBot/>    
            </>)
}
