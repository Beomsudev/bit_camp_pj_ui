import React, {useState} from 'react'
import axios from 'axios'
import {User} from '../../templates'

const UserLogin = () => {
    const [userid, setUserid] = useState()
    const [password, setPassword] = useState()
    
    const login = e => {
        e.preventDefault()
        
        axios.post(`http:loaclhost:8080/user/login`, {userid, password})
            .then(
                console.log(`SUCCESS`)
            )
            .error(
                console.log(`FAIL`)
            )

    }

    return (<User className='tab_layer'>
        
        <table>
            <form>
                <tr>
                    <td>ID</td>
                    <td><input type="text" onChange={e => setUserid(e.target.value) }/></td>  
                </tr>
                <tr>
                    <td>PW</td>
                    <td><input type="text" onChange={e => setPassword(e.target.value) }/></td>
                </tr>
                <tr>
                    <td><input type="button" value="LOGIN" onClick={login}/> 로그인 </td>
                    <td><input type="button" value="CANCEL" onClick={cancel}/> 취소 </td>
                </tr>
            </form>
        </table>        
    </User>)

}

export default UserLogin