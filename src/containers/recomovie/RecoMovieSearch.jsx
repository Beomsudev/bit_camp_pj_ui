import React, {useState} from 'react'
import axios from 'axios'
import { RecoMovie } from '../../templates'
import {useHistory} from 'react-router-dom'

const RecoMovieSearch = () => {
    const history = useHistory()
    const movieid = localStorage.getItem('movieid')
    const movie_l_title = localStorage.getItem('movie_l_title')
    const movie_l_org_title = localStorage.getItem('movie_l_org_title')
    const movie_l_genres = localStorage.getItem('movie_l_genres')
    const movie_l_year = localStorage.getItem('movie_l_year')
    const movie_l_rating = localStorage.getItem('movie_l_rating')
    const movie_l_rating_count = localStorage.getItem('movie_l_rating_count')
    
    const backToList = () => {
        history.push("./recomovie-list")
    }

    const search = e => {
        axios.get(`http://127.0.0.1:8080/api/recomovie/${document.getElementById('search').value}`)
        .then(res => {
            localStorage.setItem('test', 'test answer')
            localStorage.setItem('movieid', res.data['movieid'])
            localStorage.setItem('movie_l_title', res.data['movie_l_title'])
            localStorage.setItem('movie_l_org_title', res.data['movie_l_org_title'])
            localStorage.setItem('movie_l_genres', res.data['movie_l_genres'])
            localStorage.setItem('movie_l_year', res.data['movie_l_year'])
            localStorage.setItem('movie_l_rating', res.data['movie_l_rating'])
            localStorage.setItem('movie_l_rating_count', res.data['movie_l_rating_count'])
            history.push('/recomovie-search')
        })
        .catch(e => {
            alert(`Search Fail ${e}`)
        })
    }

    return (
        <RecoMovie>
        <h1>RECO MOVIE SEARCH</h1>
            Search ID : <input type="text" id="search"s/>
            <button onClick={search}>search</button>
            <button onClick={backToList}>Show Whole List</button>
            <table>
                <tr>
                    <th>MOVIEID</th>
                    <th>TITLE</th>
                    <th>ORGTITLE</th>
                    <th>GENRES</th>
                    <th>YEAR</th>
                    <th>RATING</th>
                    <th>RATING COUNT</th>
                </tr>
                <tr>
                    <th>{movieid}</th>
                    <th>{movie_l_title}</th>
                    <th>{movie_l_org_title}</th>
                    <th>{movie_l_genres}</th>
                    <th>{movie_l_year}</th>
                    <th>{movie_l_rating}</th>
                    <th>{movie_l_rating_count}</th>
                </tr>
            </table>
        </RecoMovie>)
}

export default RecoMovieSearch