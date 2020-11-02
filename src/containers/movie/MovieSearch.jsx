import React, {useState} from 'react'
import axios from 'axios'
import { Movie } from '../../templates'
import {useHistory} from 'react-router-dom'

const MovieSearch = () => {
    const history = useHistory()
    const movieid = localStorage.getItem('movieid')
    const title = localStorage.getItem('title')
    const subtitle = localStorage.getItem('subtitle')
    const description = localStorage.getItem('description')
    const imageurl = localStorage.getItem('imageurl')
    const year = localStorage.getItem('year')
    const rating = localStorage.getItem('rating')

    const backToList = () => {
        history.push("./movie-list")
    }

    const search = e => {
        axios.get(`http://127.0.0.1:8080/api/movie/${document.getElementById('search').value}`)
        .then(res => {
            localStorage.setItem('test', 'test answer')
            localStorage.setItem('movieid', res.data['movieid'])
            localStorage.setItem('title', res.data['title'])
            localStorage.setItem('subtitle', res.data['subtitle'])
            localStorage.setItem('description', res.data['description'])
            localStorage.setItem('imageurl', res.data['imageurl'])
            localStorage.setItem('year', res.data['year'])
            localStorage.setItem('rating', res.data['rating'])
            history.push('/recomovie-search')
        })
        .catch(e => {
            alert(`Search Fail ${e}`)
        })
    }
    return (
        <Movie>
        <h1>MOVIE SEARCH</h1>
            Search ID : <input type="text" id="search"s/>
            <button onClick={search}>search</button>
            <button onClick={backToList}>Show Whole List</button>
            <table>
                <tr>
                    <th>MOVIEID</th>
                    <th>TITLE</th>
                    <th>SUBTITLE</th>
                    <th>DESCRIPTION</th>
                    <th>IMAGEURL</th>
                    <th>YEAR</th>
                    <th>RATING</th>
                </tr>
                <tr>
                    <th>{movieid}</th>
                    <th>{title}</th>
                    <th>{subtitle}</th>
                    <th>{description}</th>
                    <th>{imageurl}</th>
                    <th>{year}</th>
                    <th>{rating}</th>
                </tr>
            </table>
        </Movie>)
}

export default MovieSearch