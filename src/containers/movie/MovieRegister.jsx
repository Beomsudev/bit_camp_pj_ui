import React, {useState} from 'react'
import axios from 'axios'
import { Movie } from '../../templates'

const MovieRegister = () => {
    const [movieid, setMovieid] = useState('')
    const [title, setTitle] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageurl, setImageurl] = useState('')
    const [year, setYear] = useState('')
    const [rating, setRating] = useState('')

    const register = () => {
        axios.post(`http://127.0.0.1:8080/api/movie`,{'movieid':movieid,
        'title': title, 'subtitle': subtitle, 'description': description, 'imageurl': imageurl, 'year': year, 'rating': rating})
        .then(res => {
            alert(`REGISTER SUCCESS`)
        })
        .catch(e => {
            alert(`REGISTER FAIL${e}`)    
        })

    }

    
    return (<Movie>
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
                    <td>SUBTITLE</td>
                    <td><input type="text" onChange={e => setSubtitle(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>DESCRIPTION</td>
                    <td><input type="text" onChange={e => setDescription(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>IMAGEURL</td>
                    <td><input type="text" onChange={e => setImageurl(e.target.value)}/></td>
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
                    <td colspan={2}>
                        <button type="button" class="btn btn-sm btn-primary" id="btnSave" onClick={register}>REGISTER</button>
                        <button>CANCEL</button>
                    </td>
                </tr>
            </table>
        </form>
    </Movie>)
}

export default MovieRegister