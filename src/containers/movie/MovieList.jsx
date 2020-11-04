import React , {useCallback, useEffect, useState} from 'react'
import axios from 'axios'
import {Movie} from '../../templates'
import {context as c} from '../../context'
import {useHistory} from 'react-router-dom'

export default function MovieList(){
    const history = useHistory()

    // const [movie, setMovie] = useState()
    // const [movies, setMovies] = useState()
    // const bulk = useCallback(async e => {
    //     e.preventDefault()
    //     try {
    //         const req = {
    //             method : c.get,
    //             url: `${c.url}/api/movies`

    //         }
    //         const res = await axios(req)
    //     } catch (error) {
        
    //     }

    // }, [])
    
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8080/api/movie-ratings`)
        .then(res=>{
            // alert(`List Success`)
            setData(res.data)
            // console.log(res.data)
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
                url: `${c.url}/api/movie-rating-search/${title}`,
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

    const revid = e => {
        // e.preventDefault()
        // const btn = document.getElementById('btn')
        const revId = e.target.getAttribute('rev-id')
        // console.log(revId)
        console.log(revId)
        localStorage.setItem("rev_id", revId);
        // const u_id = document.querySelector('button').firstChild.nodeValue
        // console.log(u_id)

        // axios.get(`http://localhost:8080/api/reviews`)
        // console.log(data[2]['rev_id'])
    }

    return (<Movie>
  
        <table>
          Search : <input type="text" id='Title'/> 
          <button onClick={fetchSomeMovie}>Search</button>

            <h1>Movie List</h1>
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

    </Movie>)
}
