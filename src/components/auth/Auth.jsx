import React from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

    const navigation = useNavigate();
  return (
    <div>
        <div className="text-center grid items-center">
            <button  onClick={()=>navigation('/u/chat')}>Login</button>
        </div>
    </div>
  )
}

export default Auth