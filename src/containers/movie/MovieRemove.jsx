import React, {useState} from 'react'
import axios from 'axios'
import { Movie } from '../../templates'

const MovieRemove = () => {
    const [movieid, setMovieid] = useState('')


    const del = () => {
        alert(`DELETE MOVIE ID : ${movieid}`)
        axios.post(`http://127.0.0.1:8080/api/moviedel`,{'movieid':movieid})
        .then(res => {
            alert(`DELETE SUCCESS`)
        })
        .catch(e => {
            alert(`DELETE FAIL ${e}`)
        })

    }

    
    return (<Movie>
        <h1>MovieRemove</h1>
        <form>
            <table className='tab_layer'>
                <tr>
                    <td>MOVIEID</td>
                    <td><input type="text" onChange={e => setMovieid(e.target.value)}/></td>
                </tr>
                <tr>
                    <td colspan={2}>
                        <button type="button" class="btn btn-sm btn-primary" id="btnDelete" onClick={del}>DELETE</button>
                        <button>CANCEL</button>
                    </td>
                </tr>
            </table>
        </form>
    </Movie>)
}

export default MovieRemove