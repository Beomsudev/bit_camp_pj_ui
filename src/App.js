import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {Nav} from './components'
import {ItemDetail, ItemList, ModifyItem, RegisterItem, RemoveItem } from './container/item'
import {UserRegister, UserLogin, UserDetail, UserModify, UserWithdrawal, UserList} from './container/user'
import {ReviewList, EditReview, ReadReview, RemoveReview, WriteReview} from './container/review'
import {Home, User, Review, Item} from './templates'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from'react-redux'
import {itemReducer } from './container/item/ItemList'

import ReduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    itemReducer
})

export default function App(){
    const [loggedIn, setLoggedIn] = useState(sessionStorage.getItem('sessionUser'))
    return (<>
    <Router>
        <Nav isAuth = {loggedIn}/>
        <hr/>
        <main>
        <Switch>
            <Provider store = {createStore(rootReducer, applyMiddleware(ReduxThunk))}>
                <Route exact path='/' component={Home}></Route>
                <Redirect from = {'/home'} to={'/'}/> 
                <Route path='/user' component={User}></Route>
                <Route path='/signup-form' component={UserRegister}/>
                <Route path='/signin-form' component={UserLogin}/>
                <Route path='/mypage' component={UserDetail}/>
                <Route path='/modifying-user-info' component={UserModify}/>
                <Route path='/membership-withdrawal' component={UserWithdrawal}/>
                <Route path='/userlist' component={UserList}/>
                <Route path='/item' component={Item}></Route>
                <Route path='/item-list' component={ItemList}/>
                <Route path='/item-detail' component={ItemDetail}/>
                <Route path='/modify-item' component={ModifyItem}/>
                <Route path='/register-item' component={RegisterItem}/>
                <Route path='/remove-item' component={RemoveItem}/>
                <Route path='/review' component={Review}></Route>
                <Route path='/review-list' component={ReviewList}></Route>
                <Route path='/edit-review' component={EditReview}></Route>
                <Route path='/read-review' component={ReadReview}></Route>
                <Route path='/remove-review' component={RemoveReview}></Route>
                <Route path='/write-review' component={WriteReview}></Route>
            </Provider>,    
        </Switch>
        </main>
    </Router>
</>)}
