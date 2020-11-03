import React , {useCallback ,useEffect, useState} from 'react'
import axios from 'axios'
import {RecoMovie} from '../../templates'
import {context as c} from '../../context'


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

    const fetchSomeMovie = useCallback(async e=> {
        alert("진입")
        const title = document.querySelector('#Title').value
        alert(title)
        try {
            const req = {
                method: c.get,
                url: `${c.url}/api/recomoviesearch/${title}`,
                // data: {params: title},
                auth: c.auth

            }
            const res = await axios(req)
            alert(res.rev_id)
            setData(res.data)
        } catch (error){
            alert(`fetchSomeReviews failure ${error}`)
        }
    },[])

    return (<RecoMovie>
  
        <table>
            <h1>RecoMovie List</h1>
            Search : <input type="text" id='Title'/> 
            <button onClick={fetchSomeMovie}>Search</button>
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
