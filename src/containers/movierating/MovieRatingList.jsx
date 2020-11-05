import React , {useCallback, useEffect, useState} from 'react'
import axios from 'axios'
import {MovieRating} from '../../templates'
import {context as c} from '../../context'
import {useHistory} from 'react-router-dom'

export default function MovieRatingList(){
    const history = useHistory()
    
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/movie-ratings`)
        .then(res=>{
            setData(res.data)
        })
        .catch(e=>{
            alert(`List Failure`)
            throw(e)
        })

    },[])

    const fetchSomeRating = useCallback(async e=> {
        const ratingid = document.querySelector('#Ratingid').value
        alert(ratingid)
        try {
            const req = {
                method: c.get,
                url: `${c.url}/api/movie-rating-search/${ratingid}`,
                auth: c.auth
            }
            const res = await axios(req)
            setData(res.data)
        } catch (error){
            alert(`The value could not be found. ${error}`)
        }
    },[])

    return (<MovieRating>

        <table>
          Search : <input type="text" id='Ratingid'/> 
          <button onClick={fetchSomeRating}>Search</button>

            <h1>Rating List</h1>
            <tr>
                <th>ratingid</th>
                <th>userid</th>
                <th>movieid</th>
                <th>rating</th>
            </tr>
            {data.map((i, index)=>(
                <tr key={index}>
                <td>{i.ratingid}</td>
                <td>{i.userid}</td>
                <td>{i.movieid}</td>
                <td>{i.rating}</td>
            </tr>
            ))}
            
        </table>

    </MovieRating>)
}
