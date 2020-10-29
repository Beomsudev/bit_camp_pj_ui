import React, {useState} from 'react'
import {Movie} from '../../templates'
import axios from 'axios'
const MovieWithdrawal = () => {
    const [movieid, setMovieid] = useState()
    const withdrawal = e => {
        e.preventDefault()
        axios.delete(`http://127.0.0.1:8080/api/movie`, {movieid:'movieid'})
        .then(res => {
            alert(`DELETE SUCCESS`)
        })
        .catch(e => {
            alert(`DELETE FAIL ${e}`)
        })

    }

    
    return (<Movie>
        <h1>MovieWithdrawal</h1>
        <form>
            <table  className='tab_layer'>
                <tr>
                    <td> Enter Movie Id</td>
                    <td> <input type="text" onChange={e => setMovieid(e.target.value)}/> </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <button type="text" class="btn btn-sm btn-primary" id="btnDelete" onClick={withdrawal}>Withdrawal</button>
                    </td>
                </tr>
            </table>
        </form>
    </Movie>)
}

export default MovieWithdrawal