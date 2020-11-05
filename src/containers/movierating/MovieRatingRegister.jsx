import React, {useState} from 'react'
import axios from 'axios'
import { MovieRating } from '../../templates'

const MovieRatingRegister = () => {
    const [userid, setUserid] = useState('')
    const [movieid, setMovieid] = useState('')
    const [rating, setRating] = useState('')

    const register = () => {
        axios.post(`http://127.0.0.1:8080/api/movie-rating`,{
        'userid': userid,
        'movieid': movieid, 
        'rating': rating})
        .then(res => {
            alert(`REGISTER SUCCESS`)
        })
        .catch(e => {
            alert(`REGISTER FAIL${e}`)    
        })

    }

    
    return (<MovieRating>
        <h1>MovieRatingRegister</h1>
        <form>
            <table className='tab_layer'>
                <tr>
                    <td>USERID</td>
                    <td><input type="text" onChange={e => setUserid(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>MOVIEID</td>
                    <td><input type="text" onChange={e => setMovieid(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>RATING</td>
                    <td><input type="text" onChange={e => setRating(e.target.value)}/></td>
                </tr>
                <tr>
                    <td colspan={2}>
                        <button type="button" class="btn btn-sm btn-primary" id="btnSave" onClick={register}>REGISTER</button>
                        <button>CANCEL</button>
                    </td>
                </tr>
            </table>
        </form>
    </MovieRating>)
}

export default MovieRatingRegister