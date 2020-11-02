import React, {useState} from 'react'
import axios from 'axios'
import { RecoMovie } from '../../templates'
// movieid,movie_l_title,movie_l_org_title,movie_l_genres,movie_l_year,movie_l_rating,movie_l_rating_count
const RecoMovieRegister = () => {
    const [movieid, setMovieid] = useState('')
    const [movie_l_title, setTitle] = useState('')
    const [movie_l_org_title, setOrgTitle] = useState('')
    const [movie_l_genres, setGenres] = useState('')
    const [movie_l_year, setYear] = useState('')
    const [movie_l_rating, setRating] = useState('')
    const [movie_l_rating_count, setRatingCount] = useState('')

    const register = () => {
        axios.post(`http://127.0.0.1:8080/api/recomovie`,{'movieid':movieid,
        'movie_l_title': movie_l_title, 'movie_l_org_title': movie_l_org_title, 'movie_l_genres': movie_l_genres, 'movie_l_year': movie_l_year, 'movie_l_rating': movie_l_rating, 'movie_l_rating_count': movie_l_rating_count})
        .then(res => {
            alert(`REGISTER SUCCESS`)
        })
        .catch(e => {
            alert(`REGISTER FAIL${e}`)    
        })

    }


    return (<RecoMovie>
        <h1>MovieRegister</h1>
        <form>
            <table className='tab_layer'>
                <tr>
                    <td>MOVIEID</td>
                    <td><input type="text" onChange={e => setMovieid(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>TITLE</td>
                    <td><input type="text" onChange={e => setTitle(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>ORGTITLE</td>
                    <td><input type="text" onChange={e => setOrgTitle(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>GENRES</td>
                    <td><input type="text" onChange={e => setGenres(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>YEAR</td>
                    <td><input type="text" onChange={e => setYear(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>RATING</td>
                    <td><input type="text" onChange={e => setRating(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>RATING COUNT</td>
                    <td><input type="text" onChange={e => setRatingCount(e.target.value)}/></td>
                </tr>
                
                <tr>
                    <td colspan={2}>
                        <button type="button" class="btn btn-sm btn-primary" id="btnSave" onClick={register}>REGISTER</button>
                        <button>CANCEL</button>
                    </td>
                </tr>
            </table>
        </form>
    </RecoMovie>)
}

export default RecoMovieRegister