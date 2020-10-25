import React from 'react'
import {Link} from 'react-router-dom'

export const UserMenu = () => <nav>
        <ol>
        <li><Link to={"/userread"}> [ 로그인 ] </Link></li>
        <li><Link to={"/userregister"}> [ 회원 가입 ] </Link></li>
        <li><Link to={"/userupdate"}> [ 회원 정보 수정 ] </Link></li>
        <li><Link to={"/userremove"}> [ 회원 탈퇴 ] </Link></li>
        </ol>
    </nav>




