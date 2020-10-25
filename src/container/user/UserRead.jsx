import React, { useState } from 'react'
import axios from 'axios'
import { User } from '../../templates'

const UserRead = () => {
    const [userid, setUserid] = useState()
    const [userpw, setUserpw] = useState()
    const login = e => {
        e.preventDefault()
        alert(`로그인 아이디: ${userid}, 비번: ${userpw}`)
        axios.post(``, {userid, userpw})
            .then(res => {
                alert('Success !')

            })
            .catch(error => {
                alert('Fail')
            })

    }
    const cancel = e => {
        e.preventDefault()
        alert('캔슬 버튼 클릭 !')
    }

    return (<User>
        <h1> [ 로그인 ] </h1>
        <table>
            <tr>
                <td>ID</td>
                <td> <input type="text" onChange={e => setUserid(`${e.target.value}`)}/> </td>
            </tr>
            <tr>
                <td> PW </td>
                <td> <input type="text" onChange={e => setUserpw(`${e.target.value}`)}/> </td>
            </tr>
            <tr>
                <td colSpan='2'>
                    <input type="button" value="LOGIN" onClick = {login}/>
                    <input type="button" value="CANCEL" onClick = {cancel}/>
                </td>
            </tr>
        </table>
    </User>)
    }

export default UserRead