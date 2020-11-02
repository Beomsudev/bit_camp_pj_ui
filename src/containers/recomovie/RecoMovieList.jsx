import React , {useEffect, useState} from 'react'
import axios from 'axios'
import {RecoMovie} from '../../templates'
import {Link} from 'react-router-dom'

export default function RecoMovieList(){
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/recomovies`)
        .then(res=>{
            alert(`List Success`)
            setData(res.data)
        })
        .catch(e=>{
            alert(`List Failure`)
            throw(e)
        })

    },[])
    
    return (<RecoMovie>
  
        <table>
            <h1>RecoMovie List</h1>
            <tr>
                <th>movieid</th>
                <th>movie_l_title</th>
                <th>movie_l_org_title</th>
                <th>movie_l_genres</th>
                <th>movie_l_year</th>
                <th>movie_l_rating</th>
                <th>movie_l_rating_count</th>
            </tr>
            {data.map((i, index)=>(
                <tr key={index}>
                <td>{i.movieid}</td>
                <td>{i.movie_l_title}</td>
                <td>{i.movie_l_org_title}</td>
                <td>{i.movie_l_genres}</td>
                <td>{i.movie_l_year}</td>
                <td>{i.movie_l_rating}</td>
                <td>{i.movie_l_rating_count}</td>
            </tr>
            ))}
            
        </table>

    </RecoMovie>)
}
