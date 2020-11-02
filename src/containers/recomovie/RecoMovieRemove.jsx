import React, {useState} from 'react'
import axios from 'axios'
import { RecoMovie } from '../../templates'

const RecoMovieRemove = () => {
    const [movieid, setMovieid] = useState('')


    const del = () => {
        alert(`DELETE MOVIE ID : ${movieid}`)
        axios.post(`http://127.0.0.1:8080/api/recomoviedel`,{'movieid':movieid})
        .then(res => {
            alert(`DELETE SUCCESS`)
        })
        .catch(e => {
            alert(`DELETE FAIL ${e}`)
        })

    }

    
    return (<RecoMovie>
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
    </RecoMovie>)
}

export default RecoMovieRemove