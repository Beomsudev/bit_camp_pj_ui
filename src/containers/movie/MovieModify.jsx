import React, {useState} from 'react'
import {Movie} from '../../templates'
import axios from 'axios'

// movieid,title,subtitle,description,imageurl,year,rating
const MovieModify = () => {
    const [movieid, setMovieId] = useState('')
    const [title, setTitle] = useState('')
    const [subtitle, setSubTitle] = useState('')
    const [description, setDescription] = useState('')
    const [imageurl, setImageurl] = useState('')
    const [year, setYear] = useState('')
    const [rating, setRating] = useState('')
    const modify = () => {
        axios.put(`http://127.0.0.1:8080/api/movie`,{'movieid':movieid,
        'title': title, 'subtitle': subtitle, 'description': description, 'imageurl': imageurl, 'year': year, 'rating': rating})
        .then(res => {
            alert(`MODIFY SUCCESS`)
        })
        .catch(e => {
            alert(`MODIFY FAIL${e}`)    
        })

    }
    return (<Movie>
        <h1>MovieModify</h1>
        <form>
            <table className='tab_layer'>
                <tr>
                    <td>MOVIEID</td>
                    <td> <input type="text" onChange={e => setMovieId(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>TITLE</td>
                    <td> <input type="text" onChange={e => setTitle(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>SUBTITLE</td>
                    <td> <input type="text" onChange={e => setSubTitle(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>DESCRIPTION</td>
                    <td> <input type="text" onChange={e => setDescription(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>IMAGEURL</td>
                    <td> <input type="text" onChange={e => setImageurl(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>YEAR</td>
                    <td> <input type="text" onChange={e => setYear(e.target.value)}/></td>
                </tr>
                <tr>
                    <td>RATING</td>
                    <td> <input type="text" onChange={e => setRating(e.target.value)}/></td>
                </tr>
                <tr colspan={2}>
                    <button type="button" class="btn btn-sm btn-primary" id="btnModify" onClick={modify}> MODIFY </button>
                    <button>cancel</button>
                </tr>
           
            </table>
        </form>
    </Movie>)
}

export default MovieModify