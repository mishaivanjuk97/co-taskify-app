import { Link } from 'react-router-dom'

import './Navbar.css'
import Task from '../assets/task.svg'

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li className="logo">
          <img src={Task} alt='logo' />
          <span>CoTaskify</span>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/signup">Signup</Link>
        </li>

        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  )
}
