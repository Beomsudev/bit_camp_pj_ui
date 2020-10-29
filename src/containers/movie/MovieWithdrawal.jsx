import React, {useState} from 'react'
import axios from 'axios'
import { Movie } from '../../templates'

const MovieWithdrawal = () => {
    const [movieid, setMovieid] = useState('')


    const del = () => {
        axios.delete(`http://127.0.0.1:8080/api/movie`,{'movieid':movieid})
        .then(res => {
            alert(`REGISTER SUCCESS`)
        })
        .catch(e => {
            alert(`REGISTER FAIL${e}`)
        })

    }

    
    return (<Movie>
        <h1>MovieWithdrawal</h1>
        <form>
            <table className='tab_layer'>
                <tr>
                    <td>MOVIEID</td>
                    <td><input type="text" onChange={e => setMovieid(e.target.value)}/></td>
                </tr>
                <tr>
                    <td colspan={2}>
                        <button type="button" class="btn btn-sm btn-primary" id="btnSave" onClick={del}> DELETE </button>
                        <button>Cancel</button>
                    </td>
                </tr>
            </table>
        </form>
    </Movie>)
}

export default MovieWithdrawal